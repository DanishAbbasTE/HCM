import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalManagementDashboardComponent } from './personal-management-dashboard/personal-management-dashboard.component';

const routes: Routes = [
  {path:'personalManagementDashboard' , component:PersonalManagementDashboardComponent},
  {
    path: 'user',
    loadChildren: () =>
      import('../PersonalManagement/user/user.module').then(
        (m) => m.UserModule),
  },
  {
    path: 'banks',
    loadChildren: () =>
      import('../PersonalManagement/banks/banks.module').then(
        (m) => m.BanksModule),
  },
  {
    path: 'demographic',
    loadChildren: () =>
      import('../PersonalManagement/demo-graphic/demo-graphic.module').then(
        (m) => m.DemoGraphicModule),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('../PersonalManagement/employee/employee.module').then(
        (m) => m.EmployeeModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalManagemnetRoutingModule { }
