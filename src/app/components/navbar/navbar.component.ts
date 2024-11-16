import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatIconModule } from '@angular/material/icon';
import { FiltrationToggleComponent } from '../filtration-toggle/filtration-toggle.component';
import { Ibutton } from '../../models/ibutton';

@Component({
  selector: 'app-navbar',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    FiltrationToggleComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  form!: FormGroup;
  activeButton: string = 'today';
  buttonValues: Ibutton[] = [
    {
      value: 'today',
      icon: '',
    },
    {
      value: 'yesterday',
      icon: '',
    },
    {
      value: 'last week',
      icon: '',
    },
  ];
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      startDateTime: new Date(),
      endDateTime: new Date(),
    });
  }
  handleToggle(value: any) {
    this.activeButton = value;
  }
}
