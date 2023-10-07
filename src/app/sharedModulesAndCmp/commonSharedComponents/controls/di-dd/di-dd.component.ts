import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { URLz } from 'src/app/enums/url.enum';
import { BaseForm } from 'src/app/sharedClasses/base-from';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'di-dd',
  templateUrl: './di-dd.component.html',
  styleUrls: ['./di-dd.component.css']
})
export class DiDdComponent extends BaseForm implements OnInit {
  @Input() label: string = '';
  @Input() control: FormControl | any;
  @Input() req: boolean = false;
  @Input() url: URLz = URLz.DEFAULT;
  @Input() params: any = {};
  @Input() title: any;
  @Input() render: any;
  @Input() default: string = 'Select';
  @Input() group: FormGroup | any;
  @Input() selectClass: string = 'form-control';
  @Input() labelClass: string = 'col-sm-2 col-form-label';
  @Input() divClass: string = 'col-sm-10';
  
  renderDropDown: any;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    if(this.url != ''){
      this.fetchDropdownData();
    }
    this.renderDropDown = this.render;
  }

  fetchDropdownData() {
    this._http.get({
      url: environment.API_URL,
      endpoint: this.url,
      ...this.params
    }).subscribe({
      next: ((res: any) => {
        let data = res?.data;
        this.renderDropDown = data;
      }),
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }

  renderDropData(data: any): string {
    return data.title;
  }

}
