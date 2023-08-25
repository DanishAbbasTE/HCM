import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanksRoutingModule } from './banks-routing.module';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankAddComponent } from './bank-add/bank-add.component';


@NgModule({
  declarations: [
    BankListComponent,
    BankAddComponent
  ],
  imports: [
    CommonModule,
    BanksRoutingModule
  ]
})
export class BanksModule { }
