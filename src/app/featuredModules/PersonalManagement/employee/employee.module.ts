import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/sharedModulesAndCmp/shared.module';

import { EmployeeRoutingModule } from './employee-routing.module';
import { DesignationComponent } from './deisgnations/designation-add/designation.component';
import { EmployeeCagtegoryComponent } from './employeeCategories/employee-cagtegory-add/employee-cagtegory.component';
import { GenderAddComponent } from './genders/gender-add/gender-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MaritalStatusComponent } from './maritalStatuses/marital-status/marital-status.component';
import { PolicyDefinedNameComponent } from './policiesDefined/policy-defined-add/policy-defined-name.component';
import { ReligionAddComponent } from './religions/religion-add/religion-add.component';
import { WeeklyOffAddComponent } from './weeklyOffs/weekly-off-add/weekly-off-add.component';
import { GazettedHolidaysComponent } from './gazetted-holidays/gazetted-holidays.component';
import { QualificationLevelComponent } from './QualificationLevels/qualification-level-add/qualification-level.component';
import { DesignationListComponent } from './deisgnations/designation-list/designation-list.component';
import { EmployeeCategoryListComponent } from './employeeCategories/employee-category-list/employee-category-list.component';
import { GenderListComponent } from './genders/gender-list/gender-list.component';
import { MaritalStatusListComponent } from './maritalStatuses/marital-status-list/marital-status-list.component';
import { PoliciyDefinedListComponent } from './policiesDefined/policiy-defined-list/policiy-defined-list.component';
import { ReligionListComponent } from './religions/religion-list/religion-list.component';
import { WeeklyOffListComponent } from './weeklyOffs/weekly-off-list/weekly-off-list.component';
import { QualificationLevelListComponent } from './QualificationLevels/qualification-level-list/qualification-level-list.component';
import { CreateEmployeeAddComponent } from './create-employee/create-employee-add/create-employee-add.component';
import { CreateEmployeeListComponent } from './create-employee/create-employee-list/create-employee-list.component';


@NgModule({
  declarations: [
    DesignationComponent,
    EmployeeCagtegoryComponent,
    GenderAddComponent,
    EmployeeListComponent,
    MaritalStatusComponent,
    PolicyDefinedNameComponent,
    ReligionAddComponent,
    WeeklyOffAddComponent,
    GazettedHolidaysComponent,
    QualificationLevelComponent,
    DesignationListComponent,
    EmployeeCategoryListComponent,
    GenderListComponent,
    MaritalStatusListComponent,
    PoliciyDefinedListComponent,
    ReligionListComponent,
    WeeklyOffListComponent,
    QualificationLevelListComponent,
    CreateEmployeeAddComponent,
    CreateEmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ]
})
export class EmployeeModule { }
