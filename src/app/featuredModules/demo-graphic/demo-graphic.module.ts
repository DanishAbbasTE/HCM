import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoGraphicRoutingModule } from './demo-graphic-routing.module';
import { DemoGraphicComponent } from './company-demo-graphic/demo-graphic.component';
import { DemoGraphicSetupComponent } from './demo-graphic-setup/demo-graphic-setup.component';


@NgModule({
  declarations: [
    DemoGraphicComponent,
    DemoGraphicSetupComponent
  ],
  imports: [
    CommonModule,
    DemoGraphicRoutingModule
  ]
})
export class DemoGraphicModule { }
