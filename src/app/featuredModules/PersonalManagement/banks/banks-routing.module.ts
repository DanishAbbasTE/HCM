import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAddComponent } from './bank-add/bank-add.component';
import { BankListComponent } from './bank-list/bank-list.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: '',
        redirectTo: 'bank_add',
        pathMatch: 'full'
      },
      {
        path: "bank_add",
        component: BankAddComponent,
      },
      {
        path: "bank_list",
        component: BankListComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BanksRoutingModule { }
