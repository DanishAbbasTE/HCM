import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/sharedModules/shared.module';

import { EmployeeRoutingModule } from './employee-routing.module';
import { DesignationComponent } from './designation/designation.component';
import { EmployeeCagtegoryComponent } from './employee-cagtegory/employee-cagtegory.component';
import { GenderAddComponent } from './gender-add/gender-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MaritalStatusComponent } from './marital-status/marital-status.component';
import { PolicyDefinedNameComponent } from './policy-defined-name/policy-defined-name.component';
import { ReligionAddComponent } from './religion-add/religion-add.component';
import { WeeklyOffAddComponent } from './weekly-off-add/weekly-off-add.component';
import { GazettedHolidaysComponent } from './gazetted-holidays/gazetted-holidays.component';
import { QualificationLevelComponent } from './qualification-level/qualification-level.component';


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
    QualificationLevelComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ]
})
export class EmployeeModule { }
