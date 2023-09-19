import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";

import { HeaderComponent } from './commonSharedComponents/header/header.component';
import { SiderBarComponent } from './commonSharedComponents/sider-bar/sider-bar.component';
import { NgxModulesModule } from './thirdPartyModules/ngx-modules/ngx-modules.module';
import { NgMaterialzModule } from './thirdPartyModules/ng-materialz/ng-materialz.module';
import { DiPaginatorComponent } from './commonSharedComponents/di-paginator/di-paginator.component';
import {LoaderComponent} from './commonSharedComponents/loader/loader.component';

const commonModules = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule,
  NgxModulesModule,
  NgMaterialzModule,
  NgxSpinnerModule.forRoot()
]

const exportedComponents = [
  HeaderComponent,
  SiderBarComponent,
  DiPaginatorComponent,
  LoaderComponent
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
