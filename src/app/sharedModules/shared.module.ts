import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './common/header/header.component';
import { SiderBarComponent } from './common/sider-bar/sider-bar.component';
import { NgxModulesModule } from './thirdPartyModules/ngx-modules/ngx-modules.module';
import { NgMaterialzModule } from './thirdPartyModules/ng-materialz/ng-materialz.module';


const commonModules = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule,
  NgxModulesModule,
  NgMaterialzModule
]

const exportedComponents = [
  HeaderComponent,
  SiderBarComponent
]

@NgModule({
  declarations: [
    exportedComponents
  ],
  imports: [
    CommonModule,
    commonModules
  ],
  exports:[
    commonModules,
    exportedComponents
  ]
})
export class SharedModule { }
