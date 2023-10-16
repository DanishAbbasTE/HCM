import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalManagemnetRoutingModule } from './personal-managemnet-routing.module';
import { PersonalManagementDashboardComponent } from '../PersonalManagement/personal-management-dashboard/personal-management-dashboard.component';

@NgModule({
  declarations: [
        PersonalManagementDashboardComponent
  ],
  imports: [
    CommonModule,
    PersonalManagemnetRoutingModule
  ]
})
export class PersonalManagemnetModule { }
