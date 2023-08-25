import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./coreModules/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./coreModules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule),
  },
  {
    path: 'banks',
    loadChildren: () =>
      import('./featuredModules/banks/banks.module').then(
        (m) => m.BanksModule),
  },
  {
    path: 'demographic',
    loadChildren: () =>
      import('./featuredModules/demo-graphic/demo-graphic.module').then(
        (m) => m.DemoGraphicModule),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./featuredModules/employee/employee.module').then(
        (m) => m.EmployeeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
