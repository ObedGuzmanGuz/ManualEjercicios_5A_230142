import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-options-datatable',
  standalone: true, 
  imports: [DataTablesModule, CommonModule], 
  templateUrl: './options-datatable.component.html',
  styleUrls: ['./options-datatable.component.css']
})
export class OptionsDatatableComponent implements OnInit {

  dtOptions: any = {}; 

   crimes = [
    { dr_no: 1234567, dateRptd: '2023-01-10', dateOcc: '2023-01-09', timeOcc: '1315', area: 1, areaName: 'Central', rptDistNo: 425, part12: 'Part 1', crmCd: 110, crmCdDesc: 'Homicide' },
    { dr_no: 2345678, dateRptd: '2023-02-15', dateOcc: '2023-02-14', timeOcc: '2230', area: 2, areaName: 'Rampart', rptDistNo: 426, part12: 'Part 1', crmCd: 220, crmCdDesc: 'Robbery' },
    { dr_no: 3456789, dateRptd: '2023-03-20', dateOcc: '2023-03-19', timeOcc: '0930', area: 3, areaName: 'Southwest', rptDistNo: 427, part12: 'Part 1', crmCd: 330, crmCdDesc: 'Burglary' },
    { dr_no: 4567890, dateRptd: '2023-04-25', dateOcc: '2023-04-24', timeOcc: '1800', area: 4, areaName: 'Hollenbeck', rptDistNo: 428, part12: 'Part 2', crmCd: 440, crmCdDesc: 'Vehicle Theft' },
    { dr_no: 5678901, dateRptd: '2023-05-30', dateOcc: '2023-05-29', timeOcc: '0105', area: 5, areaName: 'Harbor', rptDistNo: 429, part12: 'Part 1', crmCd: 550, crmCdDesc: 'Assault with Deadly Weapon' },
    { dr_no: 6789012, dateRptd: '2023-06-10', dateOcc: '2023-06-09', timeOcc: '1430', area: 6, areaName: 'Hollywood', rptDistNo: 430, part12: 'Part 2', crmCd: 660, crmCdDesc: 'Fraud' },
    { dr_no: 7890123, dateRptd: '2023-07-15', dateOcc: '2023-07-14', timeOcc: '1200', area: 7, areaName: 'Wilshire', rptDistNo: 431, part12: 'Part 1', crmCd: 770, crmCdDesc: 'Grand Theft' },
    { dr_no: 8901234, dateRptd: '2023-08-20', dateOcc: '2023-08-19', timeOcc: '1730', area: 8, areaName: 'West LA', rptDistNo: 432, part12: 'Part 1', crmCd: 880, crmCdDesc: 'Arson' },
    { dr_no: 9012345, dateRptd: '2023-09-25', dateOcc: '2023-09-24', timeOcc: '2330', area: 9, areaName: 'Van Nuys', rptDistNo: 433, part12: 'Part 2', crmCd: 990, crmCdDesc: 'Vandalism' },
    { dr_no: 1023456, dateRptd: '2023-10-30', dateOcc: '2023-10-29', timeOcc: '0845', area: 10, areaName: 'N Hollywood', rptDistNo: 434, part12: 'Part 1', crmCd: 1110, crmCdDesc: 'Kidnapping' },
    { dr_no: 200808682, dateRptd: '2020-04-25', dateOcc: '2020-04-21', timeOcc: '1400', area: 8, areaName: 'West LA', rptDistNo: 858, part12: 'Part 1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
{ dr_no: 200810737, dateRptd: '2020-06-17', dateOcc: '2020-06-16', timeOcc: '1600', area: 8, areaName: 'West LA', rptDistNo: 829, part12: 'Part 1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
{ dr_no: 201116973, dateRptd: '2020-12-26', dateOcc: '2020-12-26', timeOcc: '0332', area: 11, areaName: 'Northeast', rptDistNo: 1169, part12: 'Part 1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
{ dr_no: 200510994, dateRptd: '2020-06-25', dateOcc: '2020-06-25', timeOcc: '0230', area: 5, areaName: 'Harbor', rptDistNo: 563, part12: 'Part 1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
{ dr_no: 201107590, dateRptd: '2020-03-22', dateOcc: '2020-03-21', timeOcc: '2000', area: 11, areaName: 'Northeast', rptDistNo: 1137, part12: 'Part 1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
{ dr_no: 200119680, dateRptd: '2020-10-19', dateOcc: '2020-10-18', timeOcc: '1800', area: 1, areaName: 'Central', rptDistNo: 159, part12: 'Part 1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
{ dr_no: 200410224, dateRptd: '2020-06-27', dateOcc: '2020-06-27', timeOcc: '0400', area: 4, areaName: 'Hollenbeck', rptDistNo: 471, part12: 'Part 1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
{ dr_no: 200412621, dateRptd: '2020-09-10', dateOcc: '2020-09-09', timeOcc: '1800', area: 4, areaName: 'Hollenbeck', rptDistNo: 467, part12: 'Part 1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
{ dr_no: 201106871, dateRptd: '2020-03-04', dateOcc: '2020-03-02', timeOcc: '2130', area: 11, areaName: 'Northeast', rptDistNo: 1107, part12: 'Part 2', crmCd: 745, crmCdDesc: 'VANDALISM - MISDEAMEANOR ($399 OR UNDER)' },
{ dr_no: 200111627, dateRptd: '2020-05-12', dateOcc: '2020-05-10', timeOcc: '2200', area: 1, areaName: 'Central', rptDistNo: 111, part12: 'Part 2', crmCd: 626, crmCdDesc: 'INTIMATE PARTNER - SIMPLE ASSAULT' },
{ dr_no: 200109800, dateRptd: '2020-03-29', dateOcc: '2020-03-29', timeOcc: '0930', area: 1, areaName: 'Central', rptDistNo: 163, part12: 'Part 1', crmCd: 330, crmCdDesc: 'BURGLARY FROM VEHICLE' },
{ dr_no: 201225656, dateRptd: '2020-12-02', dateOcc: '2020-12-02', timeOcc: '2245', area: 12, areaName: '77th Street', rptDistNo: 1268, part12: 'Part 1', crmCd: 210, crmCdDesc: 'ROBBERY' },
{ dr_no: 200309451, dateRptd: '2020-04-04', dateOcc: '2020-04-04', timeOcc: '1210', area: 3, areaName: 'Southwest', rptDistNo: 361, part12: 'Part 1', crmCd: 310, crmCdDesc: 'BURGLARY' },
{ dr_no: 200211094, dateRptd: '2020-06-08', dateOcc: '2020-06-06', timeOcc: '1200', area: 2, areaName: 'Rampart', rptDistNo: 237, part12: 'Part 1', crmCd: 341, crmCdDesc: 'THEFT-GRAND ($950.01 & OVER) EXCPT,GUNS,FOWL,LIVESTK,PROD' },
{ dr_no: 201212036, dateRptd: '2020-05-02', dateOcc: '2020-05-01', timeOcc: '2330', area: 12, areaName: '77th Street', rptDistNo: 1268, part12: 'Part 1', crmCd: 230, crmCdDesc: 'ASSAULT WITH DEADLY WEAPON, AGGRAVATED ASSAULT' },
{ dr_no: 200914517, dateRptd: '2020-09-10', dateOcc: '2020-09-09', timeOcc: '1735', area: 9, areaName: 'Van Nuys', rptDistNo: 909, part12: 'Part 2', crmCd: 354, crmCdDesc: 'THEFT OF IDENTITY' },
{ dr_no: 200105246, dateRptd: '2020-01-18', dateOcc: '2020-01-18', timeOcc: '0940', area: 1, areaName: 'Central', rptDistNo: 118, part12: 'Part 2', crmCd: 624, crmCdDesc: 'BATTERY - SIMPLE ASSAULT' },
{ dr_no: 201106067, dateRptd: '2020-02-15', dateOcc: '2020-02-15', timeOcc: '1830', area: 11, areaName: 'Northeast', rptDistNo: 1101, part12: 'Part 1', crmCd: 330, crmCdDesc: 'BURGLARY FROM VEHICLE' },
{ dr_no: 201116118, dateRptd: '2020-11-27', dateOcc: '2020-11-23', timeOcc: '1200', area: 11, areaName: 'Northeast', rptDistNo: 1141, part12: 'Part 2', crmCd: 354, crmCdDesc: 'THEFT OF IDENTITY' },
{ dr_no: 200716724, dateRptd: '2020-12-04', dateOcc: '2020-12-03', timeOcc: '0811', area: 7, areaName: 'Wilshire', rptDistNo: 722, part12: 'Part 1', crmCd: 442, crmCdDesc: 'SHOPLIFTING - PETTY THEFT ($950 & UNDER)' },
{ dr_no: 200217442, dateRptd: '2020-11-15', dateOcc: '2020-11-15', timeOcc: '0310', area: 2, areaName: 'Rampart', rptDistNo: 218, part12: 'Part 1', crmCd: 310, crmCdDesc: 'BURGLARY' },
{ dr_no: 200914052, dateRptd: '2020-08-27', dateOcc: '2020-08-27', timeOcc: '1255', area: 9, areaName: 'Van Nuys', rptDistNo: 935, part12: 'Part 2', crmCd: 624, crmCdDesc: 'BATTERY - SIMPLE ASSAULT' },
{ dr_no: 200810920, dateRptd: '2020-06-20', dateOcc: '2020-06-20', timeOcc: '1000', area: 8, areaName: 'West LA', rptDistNo: 841, part12: 'Part 2', crmCd: 624, crmCdDesc: 'BATTERY - SIMPLE ASSAULT' },
{ dr_no: 201112187, dateRptd: '2020-08-04', dateOcc: '2020-07-16', timeOcc: '1900', area: 11, areaName: 'Northeast', rptDistNo: 1144, part12: 'Part 2', crmCd: 662, crmCdDesc: 'BUNCO, GRAND THEFT' },
{ dr_no: 201212259, dateRptd: '2020-05-05', dateOcc: '2020-05-05', timeOcc: '0932', area: 12, areaName: '77th Street', rptDistNo: 1239, part12: 'Part 1', crmCd: 343, crmCdDesc: 'SHOPLIFTING-GRAND THEFT ($950.01 & OVER)' },
{ dr_no: 200918185, dateRptd: '2020-12-07', dateOcc: '2020-12-07', timeOcc: '1203', area: 9, areaName: 'Van Nuys', rptDistNo: 935, part12: 'Part 2', crmCd: 900, crmCdDesc: 'VIOLATION OF COURT ORDER' },
{ dr_no: 200105289, dateRptd: '2020-01-19', dateOcc: '2020-01-16', timeOcc: '1700', area: 1, areaName: 'Central', rptDistNo: 119, part12: 'Part 1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
{ dr_no: 200516527, dateRptd: '2020-11-12', dateOcc: '2020-11-12', timeOcc: '0430', area: 5, areaName: 'Harbor', rptDistNo: 508, part12: 'Part 1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
{ dr_no: 200609101, dateRptd: '2020-04-15', dateOcc: '2020-04-12', timeOcc: '1300', area: 6, areaName: 'Hollywood', rptDistNo: 648, part12: 'Part 1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
{ dr_no: 201210786, dateRptd: '2020-04-11', dateOcc: '2020-04-11', timeOcc: '2035', area: 12, areaName: '77th Street', rptDistNo: 1259, part12: 'Part 1', crmCd: 230, crmCdDesc: 'ASSAULT WITH DEADLY' },
{ dr_no: 200706211, dateRptd: '2020-02-17', dateOcc: '2020-02-16', timeOcc: '2350', area: 7, areaName: 'Wilshire', rptDistNo: 734, part12: 'Part 2', crmCd: 624, crmCdDesc: 'BATTERY - SIMPLE ASSAULT' },
{ dr_no: 200514277, dateRptd: '2020-09-17', dateOcc: '2020-09-17', timeOcc: '2255', area: 5, areaName: 'Harbor', rptDistNo: 558, part12: 'Part 2', crmCd: 901, crmCdDesc: 'VIOLATION OF RESTRAINING ORDER' },
{ dr_no: 200506268, dateRptd: '2020-02-22', dateOcc: '2020-02-22', timeOcc: '1900', area: 5, areaName: 'Harbor', rptDistNo: 511, part12: 'Part 1', crmCd: 440, crmCdDesc: 'THEFT PLAIN - PETTY ($950 & UNDER)' },
{ dr_no: 200119908, dateRptd: '2020-10-24', dateOcc: '2020-10-23', timeOcc: '2330', area: 1, areaName: 'Central', rptDistNo: 185, part12: 'Part 1', crmCd: 330, crmCdDesc: 'BURGLARY FROM VEHICLE' },
{ dr_no: 200206940, dateRptd: '2020-02-27', dateOcc: '2020-02-27', timeOcc: '1255', area: 2, areaName: 'Rampart', rptDistNo: 216, part12: 'Part 1', crmCd: 230, crmCdDesc: 'ASSAULT WITH DEADLY WEAPON, AGGRAVATED ASSAULT' },
{ dr_no: 200709456, dateRptd: '2020-05-20', dateOcc: '2020-05-20', timeOcc: '1250', area: 7, areaName: 'Wilshire', rptDistNo: 773, part12: 'Part 1', crmCd: 330, crmCdDesc: 'BURGLARY FROM VEHICLE' },
{ dr_no: 201014375, dateRptd: '2020-10-24', dateOcc: '2020-10-23', timeOcc: '2330', area: 10, areaName: 'West Valley', rptDistNo: 1025, part12: 'Part 2', crmCd: 740, crmCdDesc: 'VANDALISM - FELONY ($400 & OVER, ALL CHURCH VANDALISMS)' },
{ dr_no: 200117110, dateRptd: '2020-08-28', dateOcc: '2020-05-01', timeOcc: '0100', area: 1, areaName: 'Central', rptDistNo: 154, part12: 'Part 1', crmCd: 121, crmCdDesc: 'RAPE, FORCIBLE' },
{ dr_no: 200610130, dateRptd: '2020-05-11', dateOcc: '2020-05-11', timeOcc: '1130', area: 6, areaName: 'Hollywood', rptDistNo: 645, part12: 'Part 1', crmCd: 210, crmCdDesc: 'ROBBERY' },
{ dr_no: 200714035, dateRptd: '2020-09-20', dateOcc: '2020-09-01', timeOcc: '0001', area: 7, areaName: 'Wilshire', rptDistNo: 715, part12: 'Part 1', crmCd: 331, crmCdDesc: 'THEFT FROM MOTOR VEHICLE - GRAND ($950.01 AND OVER)' },
{ dr_no: 200210863, dateRptd: '2020-06-01', dateOcc: '2020-06-01', timeOcc: '1525', area: 2, areaName: 'Rampart', rptDistNo: 235, part12: 'Part 1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
{ dr_no: 200911839, dateRptd: '2020-07-02', dateOcc: '2020-06-26', timeOcc: '1200', area: 9, areaName: 'Van Nuys', rptDistNo: 974, part12: 'Part 1', crmCd: 331, crmCdDesc: 'THEFT FROM MOTOR VEHICLE - GRAND ($950.01 AND OVER)' },
{ dr_no: 200615995, dateRptd: '2020-09-28', dateOcc: '2020-09-27', timeOcc: '0035', area: 6, areaName: 'Hollywood', rptDistNo: 646, part12: 'Part 2', crmCd: 740, crmCdDesc: 'VANDALISM - FELONY ($400 & OVER, ALL CHURCH VANDALISMS)' },
{ dr_no: 200200760, dateRptd: '2020-07-07', dateOcc: '2020-07-07', timeOcc: '1620', area: 2, areaName: 'Rampart', rptDistNo: 241, part12: 'Part 1', crmCd: 230, crmCdDesc: 'ASSAULT WITH DEADLY WEAPON, AGGRAVATED ASSAULT' },
{ dr_no: 201115543, dateRptd: '2020-11-08', dateOcc: '2020-11-08', timeOcc: '1500', area: 11, areaName: 'Northeast', rptDistNo: 1183, part12: 'Part 1', crmCd: 330, crmCdDesc: 'BURGLARY FROM VEHICLE' },
{ dr_no: 200320615, dateRptd: '2020-11-18', dateOcc: '2020-11-11', timeOcc: '2300', area: 3, areaName: 'Southwest', rptDistNo: 327, part12: 'Part 1', crmCd: 480, crmCdDesc: 'BIKE - STOLEN' },
{ dr_no: 200200724, dateRptd: '2020-06-05', dateOcc: '2020-06-04', timeOcc: '1850', area: 2, areaName: 'Rampart', rptDistNo: 202, part12: 'Part 2', crmCd: 624, crmCdDesc: 'BATTERY - SIMPLE ASSAULT' },
{ dr_no: 201007153, dateRptd: '2020-03-12', dateOcc: '2020-03-12', timeOcc: '0640', area: 10, areaName: 'West Valley', rptDistNo: 1001, part12: 'Part 2', crmCd: 888, crmCdDesc: 'TRESPASSING' },
{ dr_no: 201308239, dateRptd: '2020-03-16', dateOcc: '2020-02-28', timeOcc: '2300', area: 13, areaName: 'Newton', rptDistNo: 1333, part12: 'Part 2', crmCd: 745, crmCdDesc: 'VANDALISM - MISDEAMEANOR ($399 OR UNDER)' },
{ dr_no: 200506936, dateRptd: '2020-03-09', dateOcc: '2020-03-08', timeOcc: '1830', area: 5, areaName: 'Harbor', rptDistNo: 506, part12: 'Part 1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
{ dr_no: 201217850, dateRptd: '2020-08-04', dateOcc: '2020-08-04', timeOcc: '1000', area: 12, areaName: '77th Street', rptDistNo: 1249, part12: 'Part 2', crmCd: 626, crmCdDesc: 'INTIMATE PARTNER - SIMPLE ASSAULT' },
{ dr_no: 200310566, dateRptd: '2020-04-25', dateOcc: '2020-04-25', timeOcc: '0950', area: 3, areaName: 'Southwest', rptDistNo: 356, part12: 'Part 1', crmCd: 440, crmCdDesc: 'THEFT PLAIN - PETTY ($950 & UNDER)' },
{ dr_no: 201222029, dateRptd: '2020-10-04', dateOcc: '2020-10-04', timeOcc: '1800', area: 12, areaName: '77th Street', rptDistNo: 1268, part12: 'Part 2', crmCd: 626, crmCdDesc: 'INTIMATE PARTNER - SIMPLE ASSAULT' },
{ dr_no: 201211083, dateRptd: '2020-04-17', dateOcc: '2020-04-16', timeOcc: '1700', area: 12, areaName: '77th Street', rptDistNo: 1209, part12: 'Part 1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
{ dr_no: 200706188, dateRptd: '2020-09-28', dateOcc: '2020-09-28', timeOcc: '0630', area: 7, areaName: 'Wilshire', rptDistNo: 765, part12: 'Part 1', crmCd: 330, crmCdDesc: 'BURGLARY FROM VEHICLE' },
{ dr_no: 200407426, dateRptd: '2020-03-30', dateOcc: '2020-03-30', timeOcc: '1830', area: 4, areaName: 'Hollenbeck', rptDistNo: 407, part12: '1', crmCd: 442, crmCdDesc: 'SHOPLIFTING - PETTY THEFT ($950 & UNDER)' },
  { dr_no: 201014312, dateRptd: '2020-10-22', dateOcc: '2020-10-21', timeOcc: '2000', area: 10, areaName: 'West Valley', rptDistNo: 1003, part12: '2', crmCd: 740, crmCdDesc: 'VANDALISM - FELONY ($400 & OVER, ALL CHURCH VANDALISMS)' },
  { dr_no: 200217634, dateRptd: '2020-11-19', dateOcc: '2020-11-19', timeOcc: '1840', area: 2, areaName: 'Rampart', rptDistNo: 245, part12: '2', crmCd: 624, crmCdDesc: 'BATTERY - SIMPLE ASSAULT' },
  { dr_no: 201212398, dateRptd: '2020-05-07', dateOcc: '2020-05-06', timeOcc: '1800', area: 12, areaName: '77th Street', rptDistNo: 1203, part12: '1', crmCd: 341, crmCdDesc: 'THEFT-GRAND ($950.01 & OVER)EXCPT,GUNS,FOWL,LIVESTK,PROD' },
  { dr_no: 200505875, dateRptd: '2020-02-14', dateOcc: '2020-02-13', timeOcc: '2030', area: 5, areaName: 'Harbor', rptDistNo: 566, part12: '1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
  { dr_no: 201221820, dateRptd: '2020-10-02', dateOcc: '2020-10-02', timeOcc: '0600', area: 12, areaName: '77th Street', rptDistNo: 1273, part12: '2', crmCd: 624, crmCdDesc: 'BATTERY - SIMPLE ASSAULT' },
  { dr_no: 200715653, dateRptd: '2020-11-05', dateOcc: '2020-11-05', timeOcc: '1600', area: 7, areaName: 'Wilshire', rptDistNo: 701, part12: '1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' },
  { dr_no: 201109241, dateRptd: '2020-05-11', dateOcc: '2020-05-08', timeOcc: '1500', area: 11, areaName: 'Northeast', rptDistNo: 1172, part12: '1', crmCd: 420, crmCdDesc: 'THEFT FROM MOTOR VEHICLE - PETTY ($950 & UNDER)' },
  { dr_no: 200816363, dateRptd: '2020-11-13', dateOcc: '2020-11-06', timeOcc: '0836', area: 8, areaName: 'West LA', rptDistNo: 881, part12: '2', crmCd: 956, crmCdDesc: 'LETTERS, LEWD - TELEPHONE CALLS, LEWD' },
  { dr_no: 200815583, dateRptd: '2020-10-22', dateOcc: '2020-10-22', timeOcc: '1700', area: 8, areaName: 'West LA', rptDistNo: 857, part12: '1', crmCd: 310, crmCdDesc: 'BURGLARY' },
  { dr_no: 200709021, dateRptd: '2020-05-07', dateOcc: '2020-05-06', timeOcc: '1730', area: 7, areaName: 'Wilshire', rptDistNo: 735, part12: '2', crmCd: 930, crmCdDesc: 'CRIMINAL THREATS - NO WEAPON DISPLAYED' },
  { dr_no: 200200671, dateRptd: '2020-04-22', dateOcc: '2020-04-22', timeOcc: '1030', area: 2, areaName: 'Rampart', rptDistNo: 292, part12: '1', crmCd: 310, crmCdDesc: 'BURGLARY' },
  { dr_no: 200106175, dateRptd: '2020-01-31', dateOcc: '2020-01-31', timeOcc: '0830', area: 1, areaName: 'Central', rptDistNo: 157, part12: '1', crmCd: 341, crmCdDesc: 'THEFT-GRAND ($950.01 & OVER)EXCPT,GUNS,FOWL,LIVESTK,PROD' },
  { dr_no: 200617010, dateRptd: '2020-10-22', dateOcc: '2020-10-01', timeOcc: '1400', area: 6, areaName: 'Hollywood', rptDistNo: 647, part12: '2', crmCd: 668, crmCdDesc: 'EMBEZZLEMENT, GRAND THEFT ($950.01 & OVER)' },
  { dr_no: 201013217, dateRptd: '2020-09-18', dateOcc: '2020-09-12', timeOcc: '0001', area: 10, areaName: 'West Valley', rptDistNo: 1017, part12: '1', crmCd: 820, crmCdDesc: 'ORAL COPULATION' },
  { dr_no: 200104594, dateRptd: '2020-01-08', dateOcc: '2020-01-08', timeOcc: '2145', area: 1, areaName: 'Central', rptDistNo: 152, part12: '2', crmCd: 624, crmCdDesc: 'BATTERY - SIMPLE ASSAULT' },
  { dr_no: 200110052, dateRptd: '2020-04-04', dateOcc: '2020-04-02', timeOcc: '2000', area: 1, areaName: 'Central', rptDistNo: 101, part12: '1', crmCd: 510, crmCdDesc: 'VEHICLE - STOLEN' }





  ];
  

  ngOnInit(): void {
    this.dtOptions = {
      paging: true,
      pageLength: 10,
      lengthMenu: [10, 20, 30, 40],
      ordering: true,
      order: [[0, 'asc']],
      info: true,
      responsive: false,
      language: { url: 'https://cdn.datatables.net/plug-ins/1.13.4/i18n/en-GB.json' }
    };
  }
}
