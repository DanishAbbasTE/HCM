import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Personal_Management',
    loadChildren: () =>
      import('./PersonalManagement/personal-managemnet.module').then(
        (m) => m.PersonalManagemnetModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturedRoutingModule { }
