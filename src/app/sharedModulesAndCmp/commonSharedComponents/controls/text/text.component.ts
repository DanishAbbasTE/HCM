import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseForm } from 'src/app/sharedClasses/base-from';

@Component({
  selector: 'di-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent extends BaseForm implements OnInit {
  @Input() label: string = '';
  @Input() control: FormControl | any;
  @Input() req: boolean = false;
  @Input() group: FormGroup | any;
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() inpClass: string = 'form-control';
  @Input() labelClass: string = 'col-sm-2 col-form-label';
  @Input() divClass: string = 'col-sm-10'; 
  errorMsg: string = '';

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {

  }

  manageValidation() {
    this.errorMsg = this._vs.errMsg(this.control)
  }
  
}
