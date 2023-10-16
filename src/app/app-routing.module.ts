import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './coreModules/full/full.component';

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
    path: 'MasterDashboard',
    loadChildren: () =>
      import('./coreModules/MasterDashboard/dashboard.module').then(
        (m) => m.DashboardModule),
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./featuredModules/featured.module').then((m) => m.FeaturedModule),
      },
    ],
  },
  // {
  //   path: '**',
  //   redirectTo: '/error/404',
  //   pathMatch: 'full',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
