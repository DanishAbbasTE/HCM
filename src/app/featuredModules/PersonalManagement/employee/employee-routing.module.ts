import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DesignationComponent } from './deisgnations/designation-add/designation.component';
import { DesignationListComponent } from './deisgnations/designation-list/designation-list.component';

import { EmployeeCagtegoryComponent } from './employeeCategories/employee-cagtegory-add/employee-cagtegory.component';
import { EmployeeCategoryListComponent } from './employeeCategories/employee-category-list/employee-category-list.component';

import { GenderAddComponent } from './genders/gender-add/gender-add.component';
import { GenderListComponent } from './genders/gender-list/gender-list.component';

import { EmployeeListComponent } from './employee-list/employee-list.component';

import { MaritalStatusComponent } from './maritalStatuses/marital-status/marital-status.component';
import { MaritalStatusListComponent } from './maritalStatuses/marital-status-list/marital-status-list.component';

import { PolicyDefinedNameComponent } from './policiesDefined/policy-defined-add/policy-defined-name.component';
import { PoliciyDefinedListComponent } from './policiesDefined/policiy-defined-list/policiy-defined-list.component';

import { ReligionAddComponent } from './religions/religion-add/religion-add.component';
import { ReligionListComponent } from './religions/religion-list/religion-list.component';

import { WeeklyOffAddComponent } from './weeklyOffs/weekly-off-add/weekly-off-add.component';
import { WeeklyOffListComponent } from './weeklyOffs/weekly-off-list/weekly-off-list.component';

import { GazettedHolidaysComponent } from './gazetted-holidays/gazetted-holidays.component';

import { QualificationLevelComponent } from './QualificationLevels/qualification-level-add/qualification-level.component';
import { QualificationLevelListComponent } from './QualificationLevels/qualification-level-list/qualification-level-list.component';
import { CreateEmployeeAddComponent } from './create-employee/create-employee-add/create-employee-add.component';
import { CreateEmployeeListComponent } from './create-employee/create-employee-list/create-employee-list.component';



const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "employee_list",
        component: EmployeeListComponent,
      },
      {
        path: "create_employee_add",
        component: CreateEmployeeAddComponent,
      },
      {
        path: "create_employee_list",
        component: CreateEmployeeListComponent,
      },
      {
        path: "designation_add",
        component: DesignationComponent,
      },
      {
        path: "designation_list",
        component: DesignationListComponent,
      },
      {
        path: "employee_category_add",
        component: EmployeeCagtegoryComponent,
      },
      {
        path: "employee_category_list",
        component: EmployeeCategoryListComponent,
      },
      {
        path: "gender_add",
        component: GenderAddComponent,
      },
      {
        path: "gender_list",
        component: GenderListComponent,
      },
      {
        path: "marital_status_add",
        component: MaritalStatusComponent,
      },
      {
        path: "marital_status_list",
        component: MaritalStatusListComponent,
      },
      {
        path: "policy_defined_add",
        component: PolicyDefinedNameComponent,
      },
      {
        path: "policy_defined_list",
        component: PoliciyDefinedListComponent,
      },
      {
        path: "religion_add",
        component: ReligionAddComponent,
      },
      {
        path: "religion_list",
        component: ReligionListComponent,
      },
      {
        path: "weekly_off_add",
        component: WeeklyOffAddComponent,
      },
      {
        path: "weekly_off_list",
        component: WeeklyOffListComponent,
      },
      {
        path: "gazetted_holidays",
        component: GazettedHolidaysComponent,
      },
      {
        path: "qualification_level_add",
        component: QualificationLevelComponent,
      },
      {
        path: "qualification_level_list",
        component: QualificationLevelListComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
