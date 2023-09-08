import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGraphicSetupComponent } from './demo-graphic-setup-list.component';

describe('DemoGraphicSetupComponent', () => {
  let component: DemoGraphicSetupComponent;
  let fixture: ComponentFixture<DemoGraphicSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoGraphicSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoGraphicSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
