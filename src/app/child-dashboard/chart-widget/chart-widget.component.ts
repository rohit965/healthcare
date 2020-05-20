import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.css']
})
export class ChartWidgetComponent implements OnInit {
//  @Input() lineChartData: ChartDataSets[] = [
//     { data: [92,96, 98,98] }
//   ];

@Input() lineChartData: ChartDataSets[];


  lineChartLabels: Label[] = ['9.15am','9.30am','9.45am','10.00am'];

  lineChartOptions = {
    responsive: false,
    scales: {
      xAxes: [
          {
              display: true,
              ticks: {
                fontSize: 10,
                fontFamily:'Arial'
              }
          
          }
      ],
      yAxes: [
          {
              display: true,
              ticks: {
                fontSize:6,
                fontFamily:'Arial'
              }
              
          }
      ],
      
     }
     
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'rgba(66, 81, 245, 1)',
      backgroundColor: 'rgba(170, 203, 233, 1)',
      borderWidth:0.3
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';
  constructor() { }

  ngOnInit() {
  }

}
