import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDdComponent } from './multi-dd.component';

describe('MultiDdComponent', () => {
  let component: MultiDdComponent;
  let fixture: ComponentFixture<MultiDdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiDdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiDdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
