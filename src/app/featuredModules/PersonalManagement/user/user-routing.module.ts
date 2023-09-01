import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateRoleComponent } from './create-role/create-role.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "create_user",
        component: CreateUserComponent,
      },
      {
        path: "create_role",
        component: CreateRoleComponent,
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
