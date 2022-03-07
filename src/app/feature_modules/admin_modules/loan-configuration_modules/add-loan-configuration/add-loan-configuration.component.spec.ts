import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoanConfigurationComponent } from './add-loan-configuration.component';

describe('AddLoanConfigurationComponent', () => {
  let component: AddLoanConfigurationComponent;
  let fixture: ComponentFixture<AddLoanConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLoanConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoanConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
