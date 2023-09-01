import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoGraphicComponent } from './company-demo-graphic/demo-graphic.component';
import { DemoGraphicSetupComponent } from './demo-graphic-setup/demo-graphic-setup.component';
const routes: Routes = [
  {
  path: "",
  children: [
    {
      path: "demo_graphic",
      component: DemoGraphicComponent,
    },
    {
      path: "demo_graphic_setup",
      component: DemoGraphicSetupComponent,
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoGraphicRoutingModule { }
