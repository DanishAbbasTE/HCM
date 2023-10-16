import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalManagementDashboardComponent } from './personal-management-dashboard.component';

describe('PersonalManagementDashboardComponent', () => {
  let component: PersonalManagementDashboardComponent;
  let fixture: ComponentFixture<PersonalManagementDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalManagementDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalManagementDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
