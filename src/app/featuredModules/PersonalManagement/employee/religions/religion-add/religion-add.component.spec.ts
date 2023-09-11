import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionAddComponent } from './religion-add.component';

describe('ReligionAddComponent', () => {
  let component: ReligionAddComponent;
  let fixture: ComponentFixture<ReligionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReligionAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReligionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
