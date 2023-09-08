import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './common/header/header.component';
import { SiderBarComponent } from './common/sider-bar/sider-bar.component';
import { NgxModulesModule } from './thirdPartyModules/ngx-modules/ngx-modules.module';
import { NgMaterialzModule } from './thirdPartyModules/ng-materialz/ng-materialz.module';
import { DiPaginatorComponent } from './common/di-paginator/di-paginator.component';


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
  SiderBarComponent,
  DiPaginatorComponent,
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
