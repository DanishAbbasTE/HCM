import { ChangeDetectionStrategy, Component, Injectable, Injector } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ValidatorService } from './base.validator.service';
import { FormService } from './form.service';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Custom } from '../static/custom';
import { environment } from 'src/environments/environment';
import { AngularServiceInjector } from '../sharedClasses/angular-service-injector';
@Injectable({
  providedIn: 'root',
})
export class FormHelperService extends AngularServiceInjector {
  _fs: FormService;
  _vs: ValidatorService;
  _pathLocation!: string;
  _prepath!: string;

  date!: Date;
  constructor(public override injector: Injector) {
    // Service Injection
    super(injector);
    this._fs = injector.get(FormService);
    this._vs = injector.get(ValidatorService);
  }

  // GET CURRENT DATE AND TIME
  _getCurrentdatenadTime() {
    this.date = new Date();
    return this._datePipe.transform(new Date(), 'dd-MMM-yyyy h:mm a');
  }

  // DATE CONVERTER
  _dateConverter(date: string) {
    return this._datePipe.transform(date, 'dd-MMM-yyyy h:mm a');
  }

  // DATE ONLY
  _dateOnly(date = new Date()) {
    return this._datePipe.transform(date, 'yyyy-MM-dd');
  }

  _LastSixMonthDate(lastMonths: number) {
    this.date = new Date();
    return this._datePipe.transform(
      this.date.setMonth(this.date.getMonth() - lastMonths, 1),
      'yyyy-MM-dd'
    );
  }

  // DATE WITH MONTH
  _dateOnlyWithMonth(date: string | number | Date) {
    return this._datePipe.transform(date, 'yyyy-MMM-dd');
  }


  // _disable_simple_array(arr: string | any[]) {
  //   if (arr.length > 0) {
  //     return true;
  //   } else if (arr.length == 0) {
  //     return false;
  //   }
  // }



  _disable_FC(group: FormGroup | any){
    for(const key in (group as FormGroup).controls) {
      group.get(key).disable();
    }
  }

  _enable_FC(group: FormGroup | any){
    for(const key in (group as FormGroup).controls) {
      group.get(key).enable();
    }
  }

  _disable_Form_Controls(group: FormGroup){
    for(const key in (this._fs._form.get(group) as FormGroup).controls) {
      this._fs._form.get(group).get(key).disable();
    }
  }


  _enable_form_Controls(group: FormGroup){
    for(const key in (this._fs._form.get(group) as FormGroup).controls) {
      this._fs._form.get(group).get(key).enable();
    }
  }


  _disable_Single_FC(control: string){
    this._fs._form.get(control).disable();
  }

  _enable_Single_FC(control: string){
    this._fs._form.get(control).enable();
  }

  // openSnackBar(message: string, action: string | undefined, horizontal: string | any , vertical: string | any) {
  //   const InSec = 3;
  //   const horizon: MatSnackBarHorizontalPosition = horizontal;
  //   const vert: MatSnackBarVerticalPosition = vertical;
  //   this._snackBar.open(message, action, {
  //     horizontalPosition: horizon,
  //     verticalPosition: vert,
  //     duration: InSec * 1000,
  //   });
  // }

  // NUMBER TO WORD
  _numberTostring(number: number) {
    const first = [
      '',
      'one ',
      'two ',
      'three ',
      'four ',
      'five ',
      'six ',
      'seven ',
      'eight ',
      'nine ',
      'ten ',
      'eleven ',
      'twelve ',
      'thirteen ',
      'fourteen ',
      'fifteen ',
      'sixteen ',
      'seventeen ',
      'eighteen ',
      'nineteen ',
    ];
    const tens = [
      '',
      '',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety',
    ];
    const mad = ['', 'thousand', 'million', 'billion', 'trillion'];
    let word = '';

    for (let i = 0; i < mad.length; i++) {
      let tempNumber = number % (100 * Math.pow(1000, i));
      if (Math.floor(tempNumber / Math.pow(1000, i)) !== 0) {
        if (Math.floor(tempNumber / Math.pow(1000, i)) < 20) {
          word =
            first[Math.floor(tempNumber / Math.pow(1000, i))] +
            mad[i] +
            ' ' +
            word;
        } else {
          word =
            tens[Math.floor(tempNumber / (10 * Math.pow(1000, i)))] +
            '-' +
            first[Math.floor(tempNumber / Math.pow(1000, i)) % 10] +
            mad[i] +
            ' ' +
            word;
        }
      }

      tempNumber = number % Math.pow(1000, i + 1);
      if (Math.floor(tempNumber / (100 * Math.pow(1000, i))) !== 0) {
        word =
          first[Math.floor(tempNumber / (100 * Math.pow(1000, i)))] +
          'hunderd ' +
          word;
      }
    }
    return word;
  }

  // SWITCH TO ANOTHER COMPONENT
  _switch(pathLocation: string = this._pathLocation) {
    this._fs._form.reset();
    this._router.navigate([pathLocation]);
  }

  relocate(pathLocation: string = ''){
    this._router.navigate([pathLocation]);
  }

  removeEmpty(obj: { [s: string]: unknown; } | ArrayLike<unknown>) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ''));
  }

  // RELOAD COMPONENT WITHOUT REFRESH
  reloadComponent() {
    const currentUrl = this._router.url;
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate([currentUrl]);
  }

  reloadCmpNew() {
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([currentUrl]);
    });
  }

  // _logout() {
  //   return environment.UserProfile + 'Login/logout';
  // }

  // _logoutDashBoards() {
  //   return environment.UserProfile + 'Login/logout';
  // }


  // CHECK FILED EXIST
  _has(fieldName: string, fg: FormGroup = this._fs._form) {
    return fg?.contains(fieldName);
  }

  _hasVal(fieldName: string, fg: FormGroup = this._fs._form) {
    return Custom.emptyCheck(this._getVal(fieldName, fg));
  }

  _hasGroup(groupName: string, fieldName: string) {
    const group = this._fs._form?.get(groupName) as FormGroup;
    return group?.contains(fieldName);
  }

  _getVal(control: string, group: FormGroup = this._fs._form) {
    return group?.get(control)?.value;
  }

  _checkBoxChecked(val: { target: { checked: any; value: any; }; }, fieldname: any) {
    const selectedArray: FormArray = this._fs._form.get(fieldname) as FormArray;
    if (val.target.checked) {
      selectedArray.push(new FormControl(val.target.value));
    } else {
      let i = 0;
      selectedArray.controls.forEach((ctrl: FormControl | any) => {
        if (ctrl.value == val.target.value) {
          selectedArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  _disableBtn(fieldname: any) {
    const formArr: FormArray = this._fs._form.get(fieldname) as FormArray;
    return formArr?.value?.length > 0;
  }

  _getURLParam(queryParam: string) {
    return this._activeRoute.snapshot.paramMap.get(queryParam);
  }

  _disable(fieldName: string, fg: FormGroup = this._fs._form) {
    return fg?.get(fieldName)?.disabled;
  }

  _getGroup(group: string) {
    return this._fs._form.get(group) as FormGroup;
  }

  _hasRoute(_path: string) {
    const _url = window.location.pathname;
    return _url.includes(_path);
  }
}
