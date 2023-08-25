import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'banks',
    loadChildren: () =>
      import('./banks/banks.module').then(
        (m) => m.BanksModule),
  },
  {
    path: 'demographic',
    loadChildren: () =>
      import('./demo-graphic/demo-graphic.module').then(
        (m) => m.DemoGraphicModule),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then(
        (m) => m.EmployeeModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturedRoutingModule { }
