import { Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

// # 1 SOLID PRINCIPLE (Single Responsibility Principle)
// 1. Single responsibility principle: a class should have one, and only one, reason to change;
// 2. When you only want to Inject a Service

export abstract class AngularServiceInjector   {
  // Angular Services
  _activeRoute: ActivatedRoute;
  _router: Router;
  _fb: FormBuilder;
  _location: Location
  _datePipe: DatePipe
  _toastr: ToastrService;
  constructor(public injector: Injector) {
    this._router = injector.get(Router);
    this._activeRoute = injector.get(ActivatedRoute);
    this._fb = injector.get(FormBuilder);
    this._location = injector.get(Location);
    this._datePipe = injector.get(DatePipe);
    this._toastr = injector.get(ToastrService);
  }
}
