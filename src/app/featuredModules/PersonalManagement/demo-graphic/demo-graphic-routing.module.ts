import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoGraphicComponent } from './demo-graphic-setups/demo-graphic.component';
import { DemoGraphicSetupComponent } from './demo-graphic-setup-list/demo-graphic-setup-list.component';
import { OrganizationAddComponent } from './organization-add/organization-add.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
const routes: Routes = [
  {
  path: "",
  children: [
    {
      path: "demo_graphic",
      component: DemoGraphicComponent,
    },
    {
      path: "demo_graphic_list",
      component: DemoGraphicSetupComponent,
    },
    {
      path: "org_add",
      component: OrganizationAddComponent,
    },
    {
      path: "org_list",
      component: OrganizationListComponent,
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoGraphicRoutingModule { }
