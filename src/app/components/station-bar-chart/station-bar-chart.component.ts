import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Chart } from 'chart.js/auto';
import { MatTabsModule } from '@angular/material/tabs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-station-bar-chart',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatTabsModule, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './station-bar-chart.component.html',
  styleUrls: ['./station-bar-chart.component.css'], // fixed to `styleUrls`
})
export class StationBarChartComponent implements OnInit {
  xValues: string[] = [
    'Station Name Dummy 1',
    'Station Name Dummy 2',
    'Station Name Dummy 3',
    'Station Name Dummy 4',
    'Station Name Dummy 5',
  ];
  yValues: number[] = [250, 140, 180, 230, 255];
  barColors: string = '#FF7F5C';
  chart: any;

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.xValues,
        datasets: [
          {
            backgroundColor: this.barColors,
            data: this.yValues,
            barPercentage: 0.3, // Adjusts bar width
            categoryPercentage: 0.5, // Controls bar spacing
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            // text: '',
          },
        },
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
