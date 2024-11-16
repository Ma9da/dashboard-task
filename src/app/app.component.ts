import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatisticsCardComponent } from './components/statistics-card/statistics-card.component';
import { StationsListComponent } from './components/stations-list/stations-list.component';
import { StationsSalesListComponent } from './components/stations-sales-list/stations-sales-list.component';
import { StationRadarChartComponent } from './components/station-radar-chart/station-radar-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent,
    NavbarComponent,
    StatisticsCardComponent,
    StationRadarChartComponent,
    StationsListComponent,
    StationsSalesListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Dashboard-task';
}
