import { Component, Injector, OnInit } from '@angular/core';
import { BaseForm } from '../../../../../sharedClasses/base-from';
import { URLz } from 'src/app/enums/url.enum';
import { environment } from 'src/environments/environment';
import { distinctUntilChanged, throttleTime } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Designation } from 'src/app/interfaces/personalManagement/designation';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent extends BaseForm implements OnInit {

  constructor( injector : Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initForm();
    this._activeId = this._fhs._getURLParam('id');
    if (this._activeId) {
      this._showSave = false;
      this._showEdit = true;
      this.patchData();
    }
  }

  initForm(){
    this._fs._form = this._fb.group({
      companyId:[1],
      designationTitle:['',this._vs._val('Designation Title')],
      designationPrefix:['', this._vs._val('Designation Prefix')],
      IsActive:[true]
    })
  }

  patchData() {
    this._fs._form.disable();
    this._http.get({
        url: environment.API_URL,
        endpoint: URLz.GE_DESIGNATION_BY_ID,
        query: {id:this._activeId},
      }).subscribe((res:any) => {
      if(res != undefined){
        const data : Designation = res.data;
        if(data !== null){
          this._fs._form.patchValue({
            id: (data?.id != null ? data?.id : ''),
            companyId: (data?.companyId != null ? data?.companyId : ''),
            designationTitle : (data?.designationTitle != null ? data?.designationTitle : ''),
            designationPrefix : (data?.designationPrefix != null ? data?.designationPrefix : ''),
            IsActive : (data?.isActive != null ? data?.isActive : '')
          });
        }
      }
    });
  }

  enableForm(){
    this._showSave = true;
    this._showEdit = false;
    this._fs._form.enable();
  }


  submit(){
      console.log(this._fs._form.value);
      this._fs._form.markAllAsTouched();
      this._vs._submitted = true;
      this._vs.logForm();
      if(this._fs._form.valid){

        if(this._activeId){
          this._fs._form.addControl('id', new FormControl(this._activeId));
        }

        this._http.create({
          url: environment.API_URL,
          endpoint: URLz.SAVE_DESIGNATION,
          body: this._fs._form.value
        })
        .subscribe((res)=>{
            if(res != null){
              this._swl.prompts({
                title: this._activeId ? 'Update' :'Save',
                text: "Want to leave or stay here",
              }).then((result) => {
                if (result.isConfirmed) {
                  this._swl.swal('SuccessFully submited!', 'success', 'success').then((result) => {
                  this._fhs.relocate('/Personal_Management/employee/designation_list')
                })
                this._vs._toastr_success('SuccessFully submited','success');
              } else if (result.isDismissed) {
                  this._swl.swal('SuccessFully submited!', 'success', 'success')
                  this._vs._toastr_success('SuccessFully submited','success');
                  this._fs._form.reset();
                  this._fs._form.removeControl('id');
                  this._fhs.relocate('/Personal_Management/employee/designation_add');
                  this._fs._form.get('companyId').patchValue(1);
                  this._activeId = '';
                  this._fs._form.get('IsActive').patchValue(true);
              }
            })
            }
        })
      }

  }

}
