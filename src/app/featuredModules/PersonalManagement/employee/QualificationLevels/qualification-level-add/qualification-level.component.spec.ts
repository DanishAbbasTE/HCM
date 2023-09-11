import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationLevelComponent } from './qualification-level.component';

describe('QualificationLevelComponent', () => {
  let component: QualificationLevelComponent;
  let fixture: ComponentFixture<QualificationLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
