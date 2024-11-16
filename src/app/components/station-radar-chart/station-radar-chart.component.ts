import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Chart, ChartConfiguration, ChartData, Ticks } from 'chart.js';
import { StationsSalesListComponent } from '../stations-sales-list/stations-sales-list.component';
@Component({
  selector: 'app-station-radar-chart',
  standalone: true,
  imports: [StationsSalesListComponent],
  templateUrl: './station-radar-chart.component.html',
  styleUrl: './station-radar-chart.component.css',
})
export class StationRadarChartComponent implements OnInit {
  onstructor() {}
  ngOnInit(): void {
    this.createChart();
  }
  public chart: any;

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'radar',

      data: {
        // values on X-Axis

        labels: [
          '00:00',
          '02:00',
          '04:00',
          '06:00',
          '08:00',
          '10:00',
          '12:00',
          '14:00',
          '16:00',
          '18:00',
          '20:00',
          '22:00',
          '24:00',
        ],
        datasets: [
          {
            label: 'Dataset 1',
            data: [65, 59, 90, 81, 56, 55, 40, 35, 60, 70, 76, 80, 60],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [28, 48, 40, 19, 96, 27, 100, 50, 65, 55, 60, 50, 30],
            fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          r: {
            ticks: {
              display: false, // Hides the Y-axis (radial) labels
            },
            // display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        aspectRatio: 1.2,
      },
    });
  }
}
