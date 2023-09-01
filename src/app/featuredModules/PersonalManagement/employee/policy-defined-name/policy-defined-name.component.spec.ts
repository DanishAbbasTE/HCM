import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDefinedNameComponent } from './policy-defined-name.component';

describe('PolicyDefinedNameComponent', () => {
  let component: PolicyDefinedNameComponent;
  let fixture: ComponentFixture<PolicyDefinedNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyDefinedNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyDefinedNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
