import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeAddComponent } from './create-employee-add.component';

describe('CreateEmployeeAddComponent', () => {
  let component: CreateEmployeeAddComponent;
  let fixture: ComponentFixture<CreateEmployeeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmployeeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
