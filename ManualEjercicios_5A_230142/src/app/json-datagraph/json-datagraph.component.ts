import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-json-datagraph',
  templateUrl: './json-datagraph.component.html',
  styleUrls: ['./json-datagraph.component.css']
})
export class JsonDatagraphComponent implements AfterViewInit {
  crimes = [
    // Datos originales
    { dr_no: 1234567, crmCdDesc: 'Homicide' },
    { dr_no: 2345678, crmCdDesc: 'Robbery' },
    { dr_no: 3456789, crmCdDesc: 'Burglary' },
    { dr_no: 4567890, crmCdDesc: 'Vehicle Theft' },
    { dr_no: 5678901, crmCdDesc: 'Assault with Deadly Weapon' },
    { dr_no: 6789012, crmCdDesc: 'Fraud' },
    { dr_no: 7890123, crmCdDesc: 'Grand Theft' },
    { dr_no: 8901234, crmCdDesc: 'Arson' },
    { dr_no: 9012345, crmCdDesc: 'Vandalism' },
    { dr_no: 1023456, crmCdDesc: 'Kidnapping' },
    { dr_no: 200808682, crmCdDesc: 'VEHICLE - STOLEN' },
    
    // Primer conjunto adicional
    { dr_no: 200810737, crmCdDesc: 'VEHICLE - STOLEN' },
    { dr_no: 201116973, crmCdDesc: 'VEHICLE - STOLEN' },
    { dr_no: 200510994, crmCdDesc: 'VEHICLE - STOLEN' },
    { dr_no: 201107590, crmCdDesc: 'VEHICLE - STOLEN' },
    { dr_no: 200119680, crmCdDesc: 'VEHICLE - STOLEN' },
    { dr_no: 200410224, crmCdDesc: 'VEHICLE - STOLEN' },
    { dr_no: 200412621, crmCdDesc: 'VEHICLE - STOLEN' },
    { dr_no: 201106871, crmCdDesc: 'VANDALISM - MISDEAMEANOR ($399 OR UNDER)' },
    { dr_no: 200111627, crmCdDesc: 'INTIMATE PARTNER - SIMPLE ASSAULT' },
    { dr_no: 200109800, crmCdDesc: 'BURGLARY FROM VEHICLE' },
    { dr_no: 201225656, crmCdDesc: 'ROBBERY' },
    { dr_no: 200309451, crmCdDesc: 'BURGLARY' },
    { dr_no: 200211094, crmCdDesc: 'THEFT-GRAND ($950.01 & OVER)' },
    { dr_no: 201212036, crmCdDesc: 'ASSAULT WITH DEADLY WEAPON, AGGRAVATED ASSAULT' },
    { dr_no: 200914517, crmCdDesc: 'THEFT OF IDENTITY' },
    { dr_no: 200105246, crmCdDesc: 'BATTERY - SIMPLE ASSAULT' },
    { dr_no: 201106067, crmCdDesc: 'BURGLARY FROM VEHICLE' },
    { dr_no: 201116118, crmCdDesc: 'THEFT OF IDENTITY' },
    { dr_no: 200716724, crmCdDesc: 'SHOPLIFTING - PETTY THEFT ($950 & UNDER)' },
    { dr_no: 200217442, crmCdDesc: 'BURGLARY' },
    { dr_no: 200914052, crmCdDesc: 'BATTERY - SIMPLE ASSAULT' },
    { dr_no: 200810920, crmCdDesc: 'BATTERY - SIMPLE ASSAULT' },
    { dr_no: 201112187, crmCdDesc: 'BUNCO, GRAND THEFT' },
    { dr_no: 201212259, crmCdDesc: 'SHOPLIFTING-GRAND THEFT ($950.01 & OVER)' },
    { dr_no: 200918185, crmCdDesc: 'VIOLATION OF COURT ORDER' },
    { dr_no: 200105289, crmCdDesc: 'VEHICLE - STOLEN' },
    { dr_no: 200516527, crmCdDesc: 'VEHICLE - STOLEN' },
    { dr_no: 200609101, crmCdDesc: 'VEHICLE - STOLEN' },
    { dr_no: 201210786, crmCdDesc: 'ASSAULT WITH DEADLY' },
    { dr_no: 200706211, crmCdDesc: 'BATTERY - SIMPLE ASSAULT' },
    { dr_no: 200514277, crmCdDesc: 'VIOLATION OF RESTRAINING ORDER' },
    
    // Segundo conjunto adicional
    { dr_no: 200506268, crmCdDesc: 'THEFT PLAIN - PETTY ($950 & UNDER)' },
    { dr_no: 200119908, crmCdDesc: 'BURGLARY FROM VEHICLE' },
    { dr_no: 200206940, crmCdDesc: 'ASSAULT WITH DEADLY WEAPON, AGGRAVATED ASSAULT' },
    { dr_no: 200709456, crmCdDesc: 'BURGLARY FROM VEHICLE' },
    { dr_no: 201014375, crmCdDesc: 'VANDALISM - FELONY ($400 & OVER)' },
    { dr_no: 200117110, crmCdDesc: 'RAPE, FORCIBLE' },
    { dr_no: 200610130, crmCdDesc: 'ROBBERY' },
    { dr_no: 200714035, crmCdDesc: 'THEFT FROM MOTOR VEHICLE - GRAND ($950.01 AND OVER)' },
    { dr_no: 200210863, crmCdDesc: 'VEHICLE - STOLEN' },
    { dr_no: 200911839, crmCdDesc: 'THEFT FROM MOTOR VEHICLE - GRAND ($950.01 AND OVER)' },
    { dr_no: 200615995, crmCdDesc: 'VANDALISM - FELONY ($400 & OVER)' },
    { dr_no: 200200760, crmCdDesc: 'ASSAULT WITH DEADLY WEAPON, AGGRAVATED ASSAULT' },
    { dr_no: 201115543, crmCdDesc: 'BURGLARY FROM VEHICLE' },
    { dr_no: 200320615, crmCdDesc: 'BIKE - STOLEN' },
    { dr_no: 200200724, crmCdDesc: 'BATTERY - SIMPLE ASSAULT' },
    { dr_no: 201007153, crmCdDesc: 'TRESPASSING' },
    { dr_no: 201308239, crmCdDesc: 'VANDALISM - MISDEAMEANOR ($399 OR UNDER)' },
    { dr_no: 200506936, crmCdDesc: 'VEHICLE - STOLEN' },
    { dr_no: 201217850, crmCdDesc: 'INTIMATE PARTNER - SIMPLE ASSAULT' },
    { dr_no: 200310566, crmCdDesc: 'THEFT PLAIN - PETTY ($950 & UNDER)' },
    { dr_no: 201222029, crmCdDesc: 'INTIMATE PARTNER - SIMPLE ASSAULT' },
    { dr_no: 201211083, crmCdDesc: 'VEHICLE - STOLEN' },
    { dr_no: 200706188, crmCdDesc: 'BURGLARY FROM VEHICLE' },
    { dr_no: 200407426, crmCdDesc: 'SHOPLIFTING - PETTY THEFT ($950 & UNDER)' },
    { dr_no: 201014312, crmCdDesc: 'VANDALISM - FELONY ($400 & OVER)' },
    { dr_no: 200217634, crmCdDesc: 'BATTERY - SIMPLE ASSAULT' },
    { dr_no: 201212398, crmCdDesc: 'THEFT-GRAND ($950.01 & OVER)' },
    { dr_no: 200505875, crmCdDesc: 'VEHICLE - STOLEN' },
    { dr_no: 201221820, crmCdDesc: 'BATTERY - SIMPLE ASSAULT' },
    { dr_no: 200715653, crmCdDesc: 'VEHICLE - STOLEN' }
  ];

  ngAfterViewInit() {
    this.createDoughnutChart();
  }

  private getCrimeCounts() {
    const counts: { [key: string]: number } = {};
    
    this.crimes.forEach(crime => {
      let crimeType = crime.crmCdDesc;
      
      // Estandarización y agrupación de categorías
      if (crimeType.includes('VEHICLE - STOLEN') || crimeType === 'Vehicle Theft') {
        crimeType = 'VEHICLE THEFT';
      } else if (crimeType.includes('BATTERY') || crimeType.includes('ASSAULT') || 
                 crimeType.includes('ASSAULT WITH DEADLY WEAPON')) {
        crimeType = 'ASSAULT/BATTERY';
      } else if (crimeType.includes('BURGLARY') || crimeType === 'Burglary') {
        crimeType = 'BURGLARY';
      } else if ((crimeType.includes('THEFT') && !crimeType.includes('SHOPLIFTING') && 
                 !crimeType.includes('IDENTITY') && !crimeType.includes('FROM MOTOR')) || 
                 crimeType === 'Grand Theft') {
        crimeType = 'THEFT';
      } else if (crimeType.includes('SHOPLIFTING')) {
        crimeType = 'SHOPLIFTING';
      } else if (crimeType.includes('VANDALISM')) {
        crimeType = 'VANDALISM';
      } else if (crimeType.includes('VIOLATION') || crimeType.includes('COURT ORDER')) {
        crimeType = 'COURT ORDER VIOLATION';
      } else if (crimeType.includes('ROBBERY') || crimeType === 'Robbery') {
        crimeType = 'ROBBERY';
      } else if (crimeType.includes('TRESPASSING')) {
        crimeType = 'TRESPASSING';
      } else if (crimeType.includes('RAPE')) {
        crimeType = 'SEXUAL ASSAULT';
      } else if (crimeType.includes('IDENTITY')) {
        crimeType = 'IDENTITY THEFT';
      } else if (crimeType.includes('BIKE - STOLEN')) {
        crimeType = 'BIKE THEFT';
      } else if (crimeType === 'Arson') {
        crimeType = 'ARSON';
      } else if (crimeType === 'Fraud') {
        crimeType = 'FRAUD';
      } else if (crimeType === 'Kidnapping') {
        crimeType = 'KIDNAPPING';
      } else if (crimeType === 'Homicide') {
        crimeType = 'HOMICIDE';
      }
      
      counts[crimeType] = (counts[crimeType] || 0) + 1;
    });
    
    return counts;
  }

  private createDoughnutChart() {
    const counts = this.getCrimeCounts();
    const labels = Object.keys(counts);
    const data = Object.values(counts);

    // Ordenar por frecuencia descendente y agrupar categorías menores
    const combined = labels.map((label, i) => ({label, value: data[i]}));
    combined.sort((a, b) => b.value - a.value);
    
    // Separar las principales categorías de las menores
    const threshold = 3; // Umbral para considerar categoría menor
    const mainCategories = combined.filter(item => item.value >= threshold);
    const otherCategories = combined.filter(item => item.value < threshold);
    
    // Sumar las categorías menores en "OTROS"
    const otherSum = otherCategories.reduce((sum, item) => sum + item.value, 0);
    
    // Preparar datos finales
    const finalLabels = mainCategories.map(item => item.label);
    const finalData = mainCategories.map(item => item.value);
    
    if (otherSum > 0) {
      finalLabels.push('OTROS');
      finalData.push(otherSum);
    }

    // Paleta de colores extendida
    const backgroundColors = [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', 
      '#FF9F40', '#8AC24A', '#FF5722', '#607D8B', '#9C27B0',
      '#00BCD4', '#795548', '#CDDC39', '#3F51B5', '#F44336',
      '#009688', '#E91E63', '#8BC34A', '#FFC107', '#673AB7',
      '#2196F3', '#FF9800', '#4CAF50', '#00ACC1', '#7E57C2',
      '#5C6BC0', '#26A69A', '#D4E157', '#EC407A', '#AB47BC'
    ];

    new Chart('crimeChart', {
      type: 'doughnut',
      data: {
        labels: finalLabels,
        datasets: [{
          label: 'Número de incidentes',
          data: finalData,
          backgroundColor: backgroundColors.slice(0, finalLabels.length),
          borderWidth: 1,
          hoverOffset: 15
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              font: {
                size: 11
              },
              padding: 15,
              usePointStyle: true,
              pointStyle: 'circle'
            }
          },
          title: {
            display: true,
            text: 'Distribución de Tipos de Crímenes (Agrupados)',
            font: {
              size: 16,
              weight: 'bold'
            },
            padding: {
              top: 10,
              bottom: 30
            }
          },tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.raw as number; // Aseguramos que es number
                const total = (context.dataset.data as number[]).reduce((a, b) => a + b, 0);
                const percentage = Math.round((value / total) * 100);
                return `${label}: ${value} casos (${percentage}%)`;
              }
            }
          }
        },
        cutout: '55%',
        animation: {
          animateScale: true,
          animateRotate: true
        },
        layout: {
          padding: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20
          }
        }
      }
    });
  }
}