import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsSalesListComponent } from './stations-sales-list.component';

describe('StationsSalesListComponent', () => {
  let component: StationsSalesListComponent;
  let fixture: ComponentFixture<StationsSalesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationsSalesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationsSalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
