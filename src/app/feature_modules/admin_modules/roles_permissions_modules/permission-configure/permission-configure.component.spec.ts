import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionConfigureComponent } from './permission-configure.component';

describe('PermissionConfigureComponent', () => {
  let component: PermissionConfigureComponent;
  let fixture: ComponentFixture<PermissionConfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionConfigureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
