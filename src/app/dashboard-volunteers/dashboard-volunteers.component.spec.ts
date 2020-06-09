import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVolunteersComponent } from './dashboard-volunteers.component';

describe('DashboardVolunteersComponent', () => {
  let component: DashboardVolunteersComponent;
  let fixture: ComponentFixture<DashboardVolunteersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardVolunteersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
