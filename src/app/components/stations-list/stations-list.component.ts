import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FiltrationToggleComponent } from '../filtration-toggle/filtration-toggle.component';
import { Ibutton } from '../../models/ibutton';
import { StationCardComponent } from '../station-card/station-card.component';
import { Istation } from '../../models/istation';
import { NgIf } from '@angular/common';
import { StationBarChartComponent } from '../station-bar-chart/station-bar-chart.component';

@Component({
  selector: 'app-stations-list',
  standalone: true,
  imports: [
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
    FiltrationToggleComponent,
    StationCardComponent,
    NgIf,
    StationBarChartComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stations-list.component.html',
  styleUrl: './stations-list.component.css',
})
export class StationsListComponent {
  cards: Istation[] = [
    {
      stationName: 'station name dummy',
      avatarClass: 'active-header-image',
      totalSales: 62721,
      totalValue: 550,
      compressionState: 'Compression',
      totalTransactionCount: 5161,
      maxTransHrs: 20,
      maxTransTime: '8-1-2021 | 10:16 PM',
    },
    {
      stationName: 'station name dummy',
      avatarClass: 'active-header-image',
      totalSales: 62721,
      totalValue: 550,
      compressionState: 'Compression',
      totalTransactionCount: 5161,
      maxTransHrs: 20,
      maxTransTime: '8-1-2021 | 10:16 PM',
    },
    {
      stationName: 'station name dummy',
      avatarClass: 'inactive-header-image',
      totalSales: 62721,
      totalValue: 550,
      compressionState: 'Compression',
      totalTransactionCount: 5161,
      maxTransHrs: 20,
      maxTransTime: '8-1-2021 | 10:16 PM',
    },
  ];
  backgroundColor: string = 'white';
  buttonValues: Ibutton[] = [
    {
      value: 'graph',
      icon: 'equalizer',
    },
    {
      value: 'list',
      icon: 'view_agenda',
    },
  ];
  activeButton: string = 'list';
  handletoggle(value: any) {
    this.activeButton = value;
  }
}
