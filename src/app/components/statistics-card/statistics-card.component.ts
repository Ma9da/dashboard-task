import { DecimalPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { StationsListComponent } from '../stations-list/stations-list.component';
import { IstatisticsCard } from '../../models/istatistics-card';

@Component({
  selector: 'app-statistics-card',
  standalone: true,
  imports: [DecimalPipe, StationsListComponent, NgFor, NgClass, NgIf],
  templateUrl: './statistics-card.component.html',
  styleUrl: './statistics-card.component.css',
})
export class StatisticsCardComponent {
  statisicsCards: IstatisticsCard[] = [
    {
      title: 'Total Value',
      unit: 'EGP',
      state: 'decrease',
      value: 71028,
      amount: 2,

      amountUnit: '%',
    },
    {
      title: 'Total Sales',
      unit: 'm³',
      state: 'increase',
      value: 20000,
      amount: 50,
      amountUnit: 'm³',
    },
    {
      title: 'Avg Sales',
      unit: 'm³',
      state: 'decrease',
      value: 20000,
      amount: 50,
      amountUnit: 'm³',
    },
    {
      title: 'Total Transaction Count',
      unit: '',
      state: 'increase',
      value: 1567,
      amount: 20,
      amountUnit: '',
    },
  ];
}
