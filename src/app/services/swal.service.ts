import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';
import { HttpServiceParam } from '../interfaces/http-service-param';
import { FormService } from './form.service';
import { HTTPService } from './http.service';
import { environment } from 'src/environments/environment';
import { URLz } from '../enums/url.enum';
import { AngularServiceInjector } from '../sharedClasses/angular-service-injector';
@Injectable({
  providedIn: 'root',
})
export class SwalService extends AngularServiceInjector {
  _http: HTTPService;
  _fs: FormService;
  constructor(injector: Injector) {
    super(injector);
    this._fs = injector.get(FormService);
    this._http = injector.get(HTTPService);
  }
  public handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => error);
  }
  public swal(
    title: string,
    text: string,
    icon: 'success' | 'error' | 'warning' = 'success'
  ) {
    return Swal.fire({
      title,
      text,
      icon,
      confirmButtonColor: '#3085d6',
      confirmButtonText: '<i class="fas fa-thumbs-up"></i>',
      reverseButtons: true,
      allowOutsideClick: false
    });
  }
  public noDataFound() {
    this.swal('Warning', 'No Data Available', 'warning');
  }
  public prompts(options: SweetAlertOptions | any): Promise<SweetAlertResult<any>> {
    const title = options.title.toString();
    const text = options.text;
    return Swal.fire({
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#cfcfcf',
      confirmButtonColor: '#3085d6',
      cancelButtonText: '<i class="fas fa-times"></i>',
      confirmButtonText: '<i class="fas fa-thumbs-up"></i>',
      allowOutsideClick: false,
      reverseButtons: true,
      ...options,
      title,
      text,
    });
  }
  public get formLeave() {
    return this.prompts({
      title: 'Are you sure?',
      text: 'The Changes will be disregard',
    });
  }
  // Specific to List Build Class Utlized in Next Version
  // public status(
  //   param: HttpServiceParam,
  //   handleCondition: (success: boolean) => void
  // ) {
  //   this.prompts({
  //     title: 'Are you sure?',
  //     text:
  //       'Record will be ' +
  //       (param?.body?.activate ? 'Activated' : 'De-Activated'),
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this._http.status(param).subscribe((res: any) => {
  //         this.swal(
  //           param?.body?.activate ? 'Activated' : 'De-Activated',
  //           res.message
  //         );
  //         handleCondition(true);
  //       });
  //     } else {
  //       handleCondition(false);
  //     }
  //   });
  // }


  public genericSwal(text: any = '', icon: any = '', title: any = '') {
    this.swal(title, text, icon);
  }

  public UpdateObject(items: any[] , item: { id: any; }) {
    items.forEach((element, index) => {
      if (element.id === item.id) {
        items[index] = item;
      }
    });
    return items;
  }
}
