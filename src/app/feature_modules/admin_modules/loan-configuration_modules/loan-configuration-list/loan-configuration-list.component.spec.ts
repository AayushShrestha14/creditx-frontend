import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanConfigurationListComponent } from './loan-configuration-list.component';

describe('LoanConfigurationListComponent', () => {
  let component: LoanConfigurationListComponent;
  let fixture: ComponentFixture<LoanConfigurationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanConfigurationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanConfigurationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
