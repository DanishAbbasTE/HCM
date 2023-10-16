import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciyDefinedListComponent } from './policiy-defined-list.component';

describe('PoliciyDefinedListComponent', () => {
  let component: PoliciyDefinedListComponent;
  let fixture: ComponentFixture<PoliciyDefinedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliciyDefinedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliciyDefinedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
