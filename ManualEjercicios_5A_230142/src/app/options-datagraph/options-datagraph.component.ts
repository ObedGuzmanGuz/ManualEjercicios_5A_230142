import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5stock from "@amcharts/amcharts5/stock";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-options-datagraph',
  imports: [],
  templateUrl: './options-datagraph.component.html',
  styleUrl: './options-datagraph.component.css'
})
export class OptionsDatagraphComponent {

  private root!: am5.Root;

  ngAfterViewInit(): void {
    // Crear el elemento raíz de amCharts en el div con id "chartdiv"
    this.root = am5.Root.new("chartdiv2");
    const root = this.root; // alias para facilitar referencias

    // Definir tema personalizado
    const myTheme = am5.Theme.new(root);
    myTheme.rule("Grid", ["scrollbar", "minor"]).setAll({
      visible: false
    });

    root.setThemes([
      am5themes_Animated.new(root),
      myTheme
    ]);

    // Crear el gráfico de stock
    let stockChart = root.container.children.push(am5stock.StockChart.new(root, {
      paddingRight: 0
    }));

    // Configurar formato global de números
    root.numberFormatter.set("numberFormat", "#,###.00");

    // Crear panel principal del gráfico de stock
    let mainPanel = stockChart.panels.push(am5stock.StockPanel.new(root, {
      wheelY: "zoomX",
      panX: true,
      panY: true
    }));

    // Crear eje de valores (Y)
    let valueAxis = mainPanel.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, { pan: "zoom" }),
      extraMin: 0.1,
      tooltip: am5.Tooltip.new(root, {}),
      numberFormat: "#,###.00",
      extraTooltipPrecision: 2
    }));

    // Crear eje de fechas (X)
    let dateAxis = mainPanel.xAxes.push(am5xy.GaplessDateAxis.new(root, {
      baseInterval: { timeUnit: "day", count: 1 },
      renderer: am5xy.AxisRendererX.new(root, { minorGridEnabled: true }),
      tooltip: am5.Tooltip.new(root, {})
    }));

    // Agregar serie principal (candlestick)
    let valueSeries = mainPanel.series.push(am5xy.CandlestickSeries.new(root, {
      name: "MSFT",
      clustered: false,
      valueXField: "Date",
      valueYField: "Close",
      highValueYField: "High",
      lowValueYField: "Low",
      openValueYField: "Open",
      calculateAggregates: true,
      xAxis: dateAxis,
      yAxis: valueAxis,
      legendValueText: "open: [bold]{openValueY}[/] high: [bold]{highValueY}[/] low: [bold]{lowValueY}[/] close: [bold]{valueY}[/]",
      legendRangeValueText: ""
    }));

    // Establecer la serie principal en el gráfico de stock
    stockChart.set("stockSeries", valueSeries);

    // Agregar leyenda de stock
    let valueLegend = mainPanel.plotContainer.children.push(am5stock.StockLegend.new(root, {
      stockChart: stockChart
    }));

    // Crear eje de volumen
    let volumeAxisRenderer = am5xy.AxisRendererY.new(root, {});
    volumeAxisRenderer.labels.template.set("forceHidden", true);
    volumeAxisRenderer.grid.template.set("forceHidden", true);

    let volumeValueAxis = mainPanel.yAxes.push(am5xy.ValueAxis.new(root, {
      numberFormat: "#.#a",
      height: am5.percent(20),
      y: am5.percent(100),
      centerY: am5.percent(100),
      renderer: volumeAxisRenderer
    }));

    // Agregar serie de columnas para el volumen
    let volumeSeries = mainPanel.series.push(am5xy.ColumnSeries.new(root, {
      name: "Volume",
      clustered: false,
      valueXField: "Date",
      valueYField: "Volume",
      xAxis: dateAxis,
      yAxis: volumeValueAxis,
      legendValueText: "[bold]{valueY.formatNumber('#,###.0a')}[/]"
    }));

    volumeSeries.columns.template.setAll({
      strokeOpacity: 0,
      fillOpacity: 0.5
    });

    volumeSeries.columns.template.adapters.add("fill", function (fill, target) {
      let dataItem = target.dataItem;
      if (dataItem) {
        return stockChart.getVolumeColor(dataItem);
      }
      return fill;
    });

    // Establecer la serie de volumen en el gráfico de stock
    stockChart.set("volumeSeries", volumeSeries);
    valueLegend.data.setAll([valueSeries, volumeSeries]);

    // Agregar cursor al gráfico
    mainPanel.set("cursor", am5xy.XYCursor.new(root, {
      yAxis: valueAxis,
      xAxis: dateAxis,
      snapToSeries: [valueSeries],
      snapToSeriesBy: "y!"
    }));

    // Agregar scrollbar
    let scrollbar = mainPanel.set("scrollbarX", am5xy.XYChartScrollbar.new(root, {
      orientation: "horizontal",
      height: 50
    }));
    stockChart.toolsContainer.children.push(scrollbar);

    let sbDateAxis = scrollbar.chart.xAxes.push(am5xy.GaplessDateAxis.new(root, {
      baseInterval: { timeUnit: "day", count: 1 },
      renderer: am5xy.AxisRendererX.new(root, { minorGridEnabled: true })
    }));

    let sbValueAxis = scrollbar.chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    }));

    let sbSeries = scrollbar.chart.series.push(am5xy.LineSeries.new(root, {
      valueYField: "Close",
      valueXField: "Date",
      xAxis: sbDateAxis,
      yAxis: sbValueAxis
    }));

    sbSeries.fills.template.setAll({
      visible: true,
      fillOpacity: 0.3
    });

    // Función para cargar datos dinámicamente
    function loadData(ticker: string, series: any[], granularity: string) {
      am5.net.load("https://www.amcharts.com/wp-content/uploads/assets/docs/stock/" + ticker + "_" + granularity + ".csv").then(function (result) {
        let data = am5.CSVParser.parse(result.response as string, {
          delimiter: ",",
          skipEmpty: true,
          useColumnNames: true
        });

        let processor = am5.DataProcessor.new(root, {
          dateFields: ["Date"],
          dateFormat: "yyyy-MM-dd",
          numericFields: ["Open", "High", "Low", "Close", "Adj Close", "Volume"]
        });
        processor.processMany(data);

        am5.array.each(series, function (item) {
          item.data.setAll(data);
        });
      });
    }

    // Cargar datos iniciales para la serie principal
    let currentGranularity = "day";
    loadData("MSFT", [valueSeries, volumeSeries, sbSeries], currentGranularity);

    // Agregar serie de comparación inicial
    addComparingSeries("AAPL");

    // Configurar selector de índice principal
    let mainSeriesControl = am5stock.DropdownListControl.new(root, {
      stockChart: stockChart,
      name: valueSeries.get("name"),
      icon: am5stock.StockIcons.getIcon("Candlestick Series"),
      fixedLabel: true,
      searchable: true,
      searchCallback: function (query: string) {
        let main = stockChart.get("stockSeries");
        let mainSeriesID = main ? main.get("name") : "";
        let list = getTicker(query);
        am5.array.each(list, function (item: any) {
          if (item.id == mainSeriesID) {
            item.disabled = true;
          }
        });
        return list;
      }
    });

    mainSeriesControl.events.on("selected", function (ev: any) {
      // Se usa el operador ! para asegurar que valueSeries no es undefined.
      valueSeries!.set("name", ev.item.subLabel);
      loadData(ev.item.subLabel, [valueSeries, volumeSeries, sbSeries], currentGranularity);

      let comparedSeries = stockChart.getPrivate("comparedSeries") as any[] | undefined;
      am5.array.eachReverse(comparedSeries || [], function (compared: any) {
        if (compared.get("name") == valueSeries!.get("name")) {
          stockChart.removeComparingSeries(compared);
        }
      });
    });

    // Configurar control de comparación
    let comparisonControl = am5stock.ComparisonControl.new(root, {
      stockChart: stockChart,
      searchable: true,
      searchCallback: function (query: string) {
        let compared = stockChart.getPrivate("comparedSeries", []) as any[] | undefined;
        let main = stockChart.get("stockSeries");
        if (compared && compared.length > 4) {
          return [{
            label: "A maximum of 5 comparisons added",
            subLabel: "Remove some to add new ones",
            id: "",
            className: "am5stock-list-info"
          }];
        }

        let comparedIds: string[] = [];
        if (compared) {
          am5.array.each(compared, function (series: any) {
            comparedIds.push(series.get("name"));
          });
        }

        let list = getTicker(query);
        am5.array.each(list, function (item: any) {
          if (comparedIds.indexOf(item.id) !== -1 || main!.get("name") == item.id) {
            item.disabled = true;
          }
        });
        return list;
      }
    });

    comparisonControl.events.on("selected", function (ev: any) {
      if (ev.item.id !== "") {
        addComparingSeries(ev.item.subLabel);
      }
    });

    function addComparingSeries(label: string) {
      let series = am5xy.LineSeries.new(root, {
        name: label,
        valueYField: "Close",
        calculateAggregates: true,
        valueXField: "Date",
        xAxis: dateAxis,
        yAxis: valueAxis,
        legendValueText: "{valueY.formatNumber('#.00')}"
      });
      let comparingSeries = stockChart.addComparingSeries(series);
      loadData(label, [comparingSeries], currentGranularity);
    }

    function getTicker(search: string) {
      if (search === "") {
        return [];
      }
      search = search.toLowerCase();
      let tickers = [
        { label: "Apple", subLabel: "AAPL", id: "AAPL" },
        { label: "Advanced Micro Devices", subLabel: "AMD", id: "AMD" },
        { label: "Microsoft", subLabel: "MSFT", id: "MSFT" },
        { label: "Alphabet (Google)", subLabel: "GOOG", id: "GOOG" },
        { label: "Amazon", subLabel: "AMZN", id: "AMZN" },
        { label: "Tesla", subLabel: "TSLA", id: "TSLA" },
        { label: "NVIDIA", subLabel: "NVDA", id: "NVDA" },
        { label: "Netflix", subLabel: "NFLX", id: "NFLX" }
      ];

      return tickers.filter(function (item) {
        return item.label.toLowerCase().match(search) || item.subLabel.toLowerCase().match(search);
      });
    }

    // Configurar el selector de tipo de serie
    let seriesSwitcher = am5stock.SeriesTypeControl.new(root, {
      stockChart: stockChart
    });

    seriesSwitcher.events.on("selected", function (ev: any) {
      setSeriesType(ev.item.id);
    });

    function getNewSettings(series: any) {
      let newSettings: any = [];
      am5.array.each(["name", "valueYField", "highValueYField", "lowValueYField", "openValueYField", "calculateAggregates", "valueXField", "xAxis", "yAxis", "legendValueText", "legendRangeValueText", "stroke", "fill"], function (setting) {
        newSettings[setting] = series.get(setting);
      });
      return newSettings;
    }

    function setSeriesType(seriesType: string) {
      // Se asegura que currentSeries no es undefined.
      let currentSeries = stockChart.get("stockSeries")!;
      let newSettings = getNewSettings(currentSeries);

      let data = currentSeries.data.values;
      mainPanel.series.removeValue(currentSeries);
      
      let series;
      switch (seriesType) {
        case "line":
          series = mainPanel.series.push(am5xy.LineSeries.new(root, newSettings));
          break;
        case "candlestick":
        case "procandlestick":
          newSettings.clustered = false;
          series = mainPanel.series.push(am5xy.CandlestickSeries.new(root, newSettings));
          if (series.columns!.template.get("themeTags")) {
            // series.columns!.template.get("themeTags").push("pro");
          }
          break;
        case "ohlc":
          newSettings.clustered = false;
          series = mainPanel.series.push(am5xy.OHLCSeries.new(root, newSettings));
          break;
      }

      if (series) {
        valueLegend.data.removeValue(currentSeries);
        series.data.setAll(data);
        stockChart.set("stockSeries", series);
        let cursor = mainPanel.get("cursor");
        if (cursor) {
          cursor.set("snapToSeries", [series]);
        }
        valueLegend.data.insertIndex(0, series);
      }
    }

    // Crear la barra de herramientas del stock
    let toolbar = am5stock.StockToolbar.new(root, {
      container: document.getElementById("chartcontrols")!, // Se asegura que el elemento no es null
      stockChart: stockChart,
      controls: [
        mainSeriesControl,
        comparisonControl,
        am5stock.IndicatorControl.new(root, { stockChart: stockChart, legend: valueLegend }),
        am5stock.DateRangeSelector.new(root, { stockChart: stockChart }),
        am5stock.PeriodSelector.new(root, { stockChart: stockChart }),
        seriesSwitcher,
        am5stock.DrawingControl.new(root, { stockChart: stockChart }),
        am5stock.ResetControl.new(root, { stockChart: stockChart }),
        am5stock.SettingsControl.new(root, { stockChart: stockChart })
      ]
    });
  }

  ngOnDestroy(): void {
    if (this.root) {
      this.root.dispose();
    }
  }
}
