import { Injectable, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularServiceInjector } from '../sharedClasses/angular-service-injector';

@Injectable({
  providedIn: 'root',
})
export class FormService extends AngularServiceInjector {
  _form: FormGroup | any;
  constructor(injector: Injector) {
    super(injector);
    this._form = this._fb.group({});
  }
}
