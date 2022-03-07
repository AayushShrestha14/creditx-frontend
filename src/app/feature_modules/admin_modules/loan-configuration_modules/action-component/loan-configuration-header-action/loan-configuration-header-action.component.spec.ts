import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanConfigurationHeaderActionComponent} from './loan-configuration-header-action.component';

describe('HeaderActionComponent', () => {
  let component: LoanConfigurationHeaderActionComponent;
  let fixture: ComponentFixture<LoanConfigurationHeaderActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanConfigurationHeaderActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanConfigurationHeaderActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
