import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoGraphicRoutingModule } from './demo-graphic-routing.module';
import { DemoGraphicComponent } from './company-demo-graphic/demo-graphic.component';
import { DemoGraphicSetupComponent } from './demo-graphic-setup/demo-graphic-setup.component';
import { SharedModule } from 'src/app/sharedModules/shared.module';

@NgModule({
  declarations: [
    DemoGraphicComponent,
    DemoGraphicSetupComponent
  ],
  imports: [
    CommonModule,
    DemoGraphicRoutingModule,
    SharedModule
  ]
})
export class DemoGraphicModule { }
