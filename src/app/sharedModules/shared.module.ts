import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './common/header/header.component';
import { SiderBarComponent } from './common/sider-bar/sider-bar.component';


const exportedComponents = [
  HeaderComponent,
  SiderBarComponent
]

@NgModule({
  declarations: [
    exportedComponents
  ],
  imports: [
    CommonModule
  ],
  exports:[
    exportedComponents
  ]
})
export class SharedModule { }
