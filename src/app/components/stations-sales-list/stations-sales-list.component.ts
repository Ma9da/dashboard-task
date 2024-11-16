import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { StationRadarChartComponent } from '../station-radar-chart/station-radar-chart.component';
import { ISalesCard } from '../../models/isales-card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-stations-sales-list',
  standalone: true,
  imports: [MatListModule, MatProgressBarModule, NgFor],
  templateUrl: './stations-sales-list.component.html',
  styleUrl: './stations-sales-list.component.css',
})
export class StationsSalesListComponent {
  stationSalesCards: ISalesCard[] = [
    {
      imageSrc: '/icons/gas-station-svgrepo-com.svg',
      name: 'Station Name',
      total: 62721,
      progress: 37,
    },
    {
      imageSrc: '/icons/gas-station-svgrepo-com.svg',
      name: 'Station Name',
      total: 62721,
      progress: 37,
    },
    {
      imageSrc: '/icons/gas-station-svgrepo-com.svg',
      name: 'Station Name',
      total: 62721,
      progress: 37,
    },
  ];
}
