import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPostFormComponent } from './dashboard-post-form.component';

describe('DashboardPostFormComponent', () => {
  let component: DashboardPostFormComponent;
  let fixture: ComponentFixture<DashboardPostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
