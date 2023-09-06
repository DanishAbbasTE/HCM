import { Component, Injector, OnInit } from '@angular/core';
import { BaseForm } from '../../../../sharedClasses/base-from';
import { URLz } from 'src/app/enums/url.enum';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-weekly-off-add',
  templateUrl: './weekly-off-add.component.html',
  styleUrls: ['./weekly-off-add.component.css']
})
export class WeeklyOffAddComponent extends BaseForm implements OnInit {

  constructor( injector : Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this._fs._form = this._fb.group({
      companyId:[1],
      monday:[''],
      tuesday:[''],
      wednesday:[''],
      thursday:[''],
      friday:[''],
      saturday:[''],
      sunday:[''],
      // IsActive:['',this._vs._val('Is Active')]
    })
  }

  submit(){
      console.log(this._fs._form.value);
      this._fs._form.markAllAsTouched();
      this._vs._submitted = true;
      this._vs.logForm();
      if(this._fs._form.valid){
        this._http.create({
          url: environment.API_URL,
          endpoint: URLz.SAVE_WEEKLY_OFFS,
          body: this._fs._form.value
        })
        .subscribe((res)=>{
            if(res != null){
                  console.log(res);
                  this._vs._toastr_success('SuccessFully submited','success');
                  this._fs._form.reset();
            }
        })
      }

  }

}
