import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiDdComponent } from './di-dd.component';

describe('DiDdComponent', () => {
  let component: DiDdComponent;
  let fixture: ComponentFixture<DiDdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiDdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiDdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
