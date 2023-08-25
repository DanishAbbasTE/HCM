import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DesignationComponent } from './designation/designation.component';
import { EmployeeCagtegoryComponent } from './employee-cagtegory/employee-cagtegory.component';
import { GenderAddComponent } from './gender-add/gender-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MaritalStatusComponent } from './marital-status/marital-status.component';
import { PolicyDefinedNameComponent } from './policy-defined-name/policy-defined-name.component';
import { ReligionAddComponent } from './religion-add/religion-add.component';
import { WeeklyOffAddComponent } from './weekly-off-add/weekly-off-add.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "employee_list",
        component: EmployeeListComponent,
      },
      {
        path: "designation",
        component: DesignationComponent,
      },
      {
        path: "employee_category",
        component: EmployeeCagtegoryComponent,
      },
      {
        path: "gender",
        component: GenderAddComponent,
      },
      {
        path: "Marital_Satus",
        component: MaritalStatusComponent,
      },
      {
        path: "policy_defined",
        component: PolicyDefinedNameComponent,
      },
      {
        path: "religion_add",
        component: ReligionAddComponent,
      },
      {
        path: "weekly_off",
        component: WeeklyOffAddComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
