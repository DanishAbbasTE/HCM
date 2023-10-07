import { Component, Injector, OnInit } from '@angular/core';
import { BaseForm } from '../../../../../sharedClasses/base-from';
import { URLz } from 'src/app/enums/url.enum';
import { environment } from 'src/environments/environment';
import { Religion } from 'src/app/interfaces/personalManagement/religion';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-religion-add',
  templateUrl: './religion-add.component.html',
  styleUrls: ['./religion-add.component.css']
})
export class ReligionAddComponent extends BaseForm implements OnInit {

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
      religionTitle:['',this._vs._val('Religion Title')],
      religionPrefix:['', this._vs._val('Religion Prefix')],
      IsActive:['',this._vs._val('Is Active')]
    })
  }

  patchData() {
    this._fs._form.disable();
    this._http.get({
        url: environment.API_URL,
        endpoint: URLz.GE_RELIGION_BY_ID,
        query: {id:this._activeId},
      }).subscribe((res:any) => {
      if(res != undefined){
        const data : Religion = res.data;
        if(data !== null){
          this._fs._form.patchValue({
            id: (data?.id != null ? data?.id : ''),
            companyId: (data?.companyId != null ? data?.companyId : ''),
            religionTitle : (data?.religionTitle != null ? data?.religionTitle : ''),
            religionPrefix : (data?.religionPrefix != null ? data?.religionPrefix : ''),
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
          endpoint: URLz.SAVE_RELIGION,
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
                  this._fhs.relocate('/Personal_Management/employee/religion_list')
                })
                this._vs._toastr_success('SuccessFully submited','success');
              } else if (result.isDismissed) {
                  this._swl.swal('SuccessFully submited!', 'success', 'success')
                  this._vs._toastr_success('SuccessFully submited','success');
                  this._fs._form.reset();
                  this._fs._form.removeControl('id');
                  this._fhs.relocate('/Personal_Management/employee/religion_add');
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
