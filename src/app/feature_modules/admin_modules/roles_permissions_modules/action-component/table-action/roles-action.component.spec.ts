import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesActionComponent } from './roles-action.component';

describe('RolesActionComponent', () => {
  let component: RolesActionComponent;
  let fixture: ComponentFixture<RolesActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
