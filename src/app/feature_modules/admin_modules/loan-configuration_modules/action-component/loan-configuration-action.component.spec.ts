import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanConfigurationActionComponent } from './loan-configuration-action.component';

describe('LoanConfigurationActionComponent', () => {
  let component: LoanConfigurationActionComponent;
  let fixture: ComponentFixture<LoanConfigurationActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanConfigurationActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanConfigurationActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
