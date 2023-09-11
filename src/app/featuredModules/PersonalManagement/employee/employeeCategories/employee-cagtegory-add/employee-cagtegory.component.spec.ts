import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCagtegoryComponent } from './employee-cagtegory.component';

describe('EmployeeCagtegoryComponent', () => {
  let component: EmployeeCagtegoryComponent;
  let fixture: ComponentFixture<EmployeeCagtegoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCagtegoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCagtegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
