import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoGraphicComponent } from './company-demo-graphic/demo-graphic.component';
import { DemoGraphicSetupComponent } from './demo-graphic-setup/demo-graphic-setup.component';
import { OrganizationAddComponent } from './organization-add/organization-add.component';
const routes: Routes = [
  {
  path: "",
  children: [
    {
      path: "demo_graphic",
      component: DemoGraphicComponent,
    },
    {
      path: "org_add",
      component: OrganizationAddComponent,
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoGraphicRoutingModule { }
