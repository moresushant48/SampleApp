import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardModeratorsComponent } from './dashboard-moderators.component';

describe('DashboardModeratorsComponent', () => {
  let component: DashboardModeratorsComponent;
  let fixture: ComponentFixture<DashboardModeratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardModeratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardModeratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
