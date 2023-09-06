import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GazettedHolidaysComponent } from './gazetted-holidays.component';

describe('GazettedHolidaysComponent', () => {
  let component: GazettedHolidaysComponent;
  let fixture: ComponentFixture<GazettedHolidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GazettedHolidaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GazettedHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
