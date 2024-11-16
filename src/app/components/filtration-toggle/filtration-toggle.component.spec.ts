import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrationToggleComponent } from './filtration-toggle.component';

describe('FiltrationToggleComponent', () => {
  let component: FiltrationToggleComponent;
  let fixture: ComponentFixture<FiltrationToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrationToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrationToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
