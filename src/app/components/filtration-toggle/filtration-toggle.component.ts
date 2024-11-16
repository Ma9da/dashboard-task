import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Ibutton } from '../../models/ibutton';

@Component({
  selector: 'app-filtration-toggle',
  standalone: true,
  imports: [NgClass, NgStyle, NgFor, MatIcon, NgIf, MatButtonModule],
  templateUrl: './filtration-toggle.component.html',
  styleUrl: './filtration-toggle.component.css',
})
export class FiltrationToggleComponent {
  @Input() buttonValues: Ibutton[] = [];
  @Input() activeButton: string = '';
  @Input() backgroundColor = 'var(--neutral-off-white)';
  @Output() onToggle: EventEmitter<any> = new EventEmitter<any>();

  sendValue(value: string): void {
    this.onToggle.emit(value);
  }
}
