import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeListComponent } from './create-employee-list.component';

describe('CreateEmployeeListComponent', () => {
  let component: CreateEmployeeListComponent;
  let fixture: ComponentFixture<CreateEmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
