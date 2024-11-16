import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationBarChartComponent } from './station-bar-chart.component';

describe('StationBarChartComponent', () => {
  let component: StationBarChartComponent;
  let fixture: ComponentFixture<StationBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationBarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
