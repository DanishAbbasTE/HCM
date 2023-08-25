import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoGraphicRoutingModule } from './demo-graphic-routing.module';
import { DemoGraphicComponent } from './demo-graphic/demo-graphic.component';


@NgModule({
  declarations: [
    DemoGraphicComponent
  ],
  imports: [
    CommonModule,
    DemoGraphicRoutingModule
  ]
})
export class DemoGraphicModule { }
