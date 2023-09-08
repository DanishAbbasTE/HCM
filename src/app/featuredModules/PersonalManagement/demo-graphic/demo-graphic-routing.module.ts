import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoGraphicComponent } from './demo-graphic-setups/demo-graphic.component';
import { DemoGraphicSetupComponent } from './demo-graphic-setup-list/demo-graphic-setup-list.component';
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
      path: "demo_graphic_list",
      component: DemoGraphicSetupComponent,
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
