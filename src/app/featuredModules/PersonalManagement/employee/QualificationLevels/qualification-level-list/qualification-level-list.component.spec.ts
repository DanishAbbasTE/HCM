import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationLevelListComponent } from './qualification-level-list.component';

describe('QualificationLevelListComponent', () => {
  let component: QualificationLevelListComponent;
  let fixture: ComponentFixture<QualificationLevelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationLevelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationLevelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
