import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoGraphicComponent } from './demo-graphic.component';

const routes: Routes = [
  {
  path: "",
  children: [
    {
      path: '',
      redirectTo: 'demo_graphic',
      pathMatch: 'full'
    },
    {
      path: "demo_graphic",
      component: DemoGraphicComponent,
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoGraphicRoutingModule { }
