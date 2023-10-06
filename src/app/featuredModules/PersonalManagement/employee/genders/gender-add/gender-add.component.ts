import { Component, Injector, OnInit } from '@angular/core';
import { BaseForm } from '../../../../../sharedClasses/base-from';
import { URLz } from 'src/app/enums/url.enum';
import { environment } from 'src/environments/environment';
import { Genders } from 'src/app/interfaces/personalManagement/gender-data';
import { FormControl } from '@angular/forms'; // add-shahwaiz

@Component({
  selector: 'app-gender-add',
  templateUrl: './gender-add.component.html',
  styleUrls: ['./gender-add.component.css']
})
export class GenderAddComponent extends BaseForm implements OnInit {

  constructor( injector : Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initForm();

    // add-shahwaiz
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
      genderTitle:['',this._vs._val('Gender Title')],
      genderPrefix:['', this._vs._val('Gender Prefix')],
      IsActive:['',this._vs._val('Is Active')]
    })
  }

  submit(){
      this._fs._form.markAllAsTouched();
      this._vs._submitted = true;
      this._vs.logForm();
      if (!this._activeId) {
        this._fs._form.removeControl('IsActive')
      }
      if(this._fs._form.valid){
        // add-shahwaiz
        if(this._activeId){
          this._fs._form.addControl('id', new FormControl(this._activeId));
        }
// add-shahwaiz
        this._http.create({
          url: environment.API_URL,
          endpoint: URLz.SAVE_GENDER,
          body: this._fs._form.value
        })
        // add-shahwaiz
        .subscribe((res)=>{
          if(res != null){
                this._swl.prompts({
                    title: this._activeId ? 'Update' :'Save',
                    text: "Want to leave or stay here",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      this._swl.swal('SuccessFully submited!', 'success', 'success').then((result) => {
                      this._fhs.relocate('/Personal_Management/employee/gender_list')
                    })
                    this._vs._toastr_success('SuccessFully submited','success');
                  } else if (result.isDismissed) {
                      this._swl.swal('SuccessFully submited!', 'success', 'success')
                      this._vs._toastr_success('SuccessFully submited','success');
                      this._fs._form.reset();
                      this._fs._form.removeControl('id');
                      this._fhs.relocate('/Personal_Management/employee/gender_list');
                      this._fs._form.get('companyId').patchValue(1);
                      this._activeId = '';
                      this._fs._form.get('IsActive').patchValue(true);
                  }
                })
          }
      })
      // add-shahwaiz
      }

  }

  // add-shahwaiz
  patchData() {
    this._fs._form.disable();
    this._http.get({
        url: environment.API_URL,
        endpoint: URLz.GE_GENDER_BY_ID,
        query: {id:this._activeId},
      }).subscribe((res:any) => {
      if(res != undefined){
        const data : Genders = res.data;
        if(data !== null){
          this._fs._form.patchValue({
            companyId: (data?.companyId != null ? data?.companyId : ''),
            genderTitle : (data?.genderTitle != null ? data?.genderTitle : ''),
            genderPrefix : (data?.genderPrefix != null ? data?.genderPrefix : ''),
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

  // add-shahwaiz
}
