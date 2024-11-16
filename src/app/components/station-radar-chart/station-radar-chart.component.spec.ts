import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationRadarChartComponent } from './station-radar-chart.component';

describe('StationRadarChartComponent', () => {
  let component: StationRadarChartComponent;
  let fixture: ComponentFixture<StationRadarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationRadarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationRadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
