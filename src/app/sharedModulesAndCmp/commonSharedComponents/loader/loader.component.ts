import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'ngx-loader-animate',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  constructor(private _ss: StateService, private spinner: NgxSpinnerService) {
    this._ss.isLoading.subscribe((x) => {
      if(x) spinner.show()
      else spinner.hide()
    });
  }
}
