import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuatorListComponent } from './valuator-list.component';

describe('ValuatorListComponent', () => {
  let component: ValuatorListComponent;
  let fixture: ComponentFixture<ValuatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuatorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
