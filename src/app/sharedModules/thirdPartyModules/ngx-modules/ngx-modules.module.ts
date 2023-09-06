import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      enableHtml: true,
      progressBar: true,
      closeButton: true,
      onActivateTick: false,
      timeOut: 0,
      // toastClass: 'toast',
      positionClass: 'toast-top-right',
    }),
  ]
})
export class NgxModulesModule { }



