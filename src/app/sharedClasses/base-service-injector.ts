import { Component, Injector } from '@angular/core';
import { ValidatorService } from '../services/base.validator.service';
import { FormHelperService } from '../services/form-helper.service';
import { URLz } from '../enums/url.enum';
import { HttpServiceParam } from '../interfaces/http-service-param';
import { FormService } from '../services/form.service';
import { HTTPService } from '../services/http.service';
// import { StateService } from '../services/state.service';
import { SwalService } from '../services/swal.service';
// import { ControlStateService } from '../services/control.state.service';
import { Subscription } from 'rxjs';
import { ACTION } from '../enums/action.enum';
// import { FormSubmitService } from '../services/form-submit.service';
import { AngularServiceInjector } from './angular-service-injector';
// In Base Class append all the properties / methods with _ (underscore)

// # 1 SOLID PRINCIPLE (Single Responsibility Principle)
// 1. Single responsibility principle: a class should have one, and only one, reason to change;
// 2. When you only want to Inject a Service
@Component({template: ''})
export abstract class BaseServiceInjector extends AngularServiceInjector   {
  _http: HTTPService;
  _fs: FormService;
  _vs: ValidatorService;
  _fhs: FormHelperService;
  // _fss: FormSubmitService;
  // _ss: StateService;
  // _css: ControlStateService;
  _swl : SwalService;

  // Enum Global Property for HTML Template
  URLz = URLz; // For Template
  // ACTION = ACTION; // For Template (Route Permission)
  param: HttpServiceParam = {}; // Override this Property for Default Behaviour of HTTP Request

  // Guard Related Properties
  _activeId: string | undefined;
  _isExist: boolean | undefined;

  subscriptionArray: Subscription[] = [];
  constructor(
    public override injector: Injector
    ) {
    super(injector)
    this._http = injector.get(HTTPService);
    this._fs = injector.get(FormService);
    this._vs = injector.get(ValidatorService);
    this._fhs = injector.get(FormHelperService);
    this._swl = injector.get(SwalService);
    // this._css = injector.get(ControlStateService);
    // this._ss = injector.get(StateService);
    // this._fss = injector.get(FormSubmitService);
  }
}
