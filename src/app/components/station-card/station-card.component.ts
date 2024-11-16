import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DecimalPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Istation } from '../../models/istation';

@Component({
  selector: 'app-station-card',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    DecimalPipe,
    NgFor,
    NgClass,
    NgIf,
  ],
  templateUrl: './station-card.component.html',
  styleUrl: './station-card.component.css',
})
export class StationCardComponent {
  @Input() cards: Istation[] = [];
}
