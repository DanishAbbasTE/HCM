import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoGraphicRoutingModule } from './demo-graphic-routing.module';
import { DemoGraphicComponent } from './demo-graphic-setups/demo-graphic.component';
import { DemoGraphicSetupComponent } from './demo-graphic-setup-list/demo-graphic-setup-list.component';
import { SharedModule } from 'src/app/sharedModulesAndCmp/shared.module';
import { OrganizationAddComponent } from './organization-add/organization-add.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';

@NgModule({
  declarations: [
    DemoGraphicComponent,
    DemoGraphicSetupComponent,
    OrganizationAddComponent,
    OrganizationListComponent
  ],
  imports: [
    CommonModule,
    DemoGraphicRoutingModule,
    SharedModule
  ]
})
export class DemoGraphicModule { }
