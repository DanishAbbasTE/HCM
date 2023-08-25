import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyOffAddComponent } from './weekly-off-add.component';

describe('WeeklyOffAddComponent', () => {
  let component: WeeklyOffAddComponent;
  let fixture: ComponentFixture<WeeklyOffAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyOffAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyOffAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
