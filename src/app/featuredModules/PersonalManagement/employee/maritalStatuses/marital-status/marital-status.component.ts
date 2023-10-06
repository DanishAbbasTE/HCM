import { Component, Injector, OnInit } from '@angular/core';
import { BaseForm } from '../../../../../sharedClasses/base-from';
import { URLz } from 'src/app/enums/url.enum';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-marital-status',
  templateUrl: './marital-status.component.html',
  styleUrls: ['./marital-status.component.css']
})
export class MaritalStatusComponent extends BaseForm implements OnInit {
  viewEdit: boolean = false;
  viewSave: boolean = true;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initForm();
    this._activeId = this._fhs._getURLParam('id')
    if (this._activeId) {
      this.viewEdit = true;
      this.viewSave = false
      this.patchData()
    }
  }

  initForm() {
    this._fs._form = this._fb.group({
      companyId: [1],
      maritalStatusTitle: ['', this._vs._val('Marital Status Title')],
      maritalStatusPrefix: ['', this._vs._val('Marital Status Prefix')],
      isActive: ['', this._vs._val('Is Active')]
    })
  }

  onSubmit() {
    this._fs._form.markAllAsTouched();
    this._vs._submitted = true;
    this._vs.logForm();
    if (!this._activeId) {
      this._fs._form.removeControl('isActive')
    }
    if (this._fs._form.valid) {
      this._http.create({
        url: environment.API_URL,
        endpoint: URLz.SAVE_MARITAL_STATUS,
        body: this._fs._form.value
      })
        .subscribe({
          next: ((res => {
            if (res != null) {
              this._swl.prompts({
                title: this._activeId ? 'Update' : 'Save',
                text: "Want to leave or stay here",
              }).then((result) => {
                const goToMartialStatusList = this._fhs.relocate('/Personal_Management/employee/marital_status_list');
                if (result.isConfirmed) {
                  this._swl.swal('SuccessFully submited!', 'success', 'success').then((result) => {
                    goToMartialStatusList;
                  })
                  this._vs._toastr_success('SuccessFully submited', 'success');
                } else if (result.isDismissed) {
                  this._swl.swal('SuccessFully submited!', 'success', 'success')
                  this._vs._toastr_success('SuccessFully submited', 'success');
                  this._fs._form.reset();
                  this._fs._form.removeControl('id');
                  goToMartialStatusList;
                  this._fs._form.get('companyId').patchValue(1);
                  this._activeId = '';
                  this._fs._form.get('IsActive').patchValue(true);
                }
              })
            }
          }))
        })
    }
  }

  patchData() {
    this._fs._form.disable();
    this._http.get({
      url: environment.API_URL,
      endpoint: URLz.GET_MARTIAL_STATUS_BY_ID,
      query: { id: this._activeId }
    })
      .subscribe({
        next: ((res: any) => {
          if (res != undefined) {
            const data: any = res.data;
            if (data != null) {
              console.log(data);
              this._fs._form.patchValue({
                companyId: (data?.companyId != null ? data?.companyId : ''),
                maritalStatusTitle: (data?.maritalStatusTitle != null ? data?.maritalStatusTitle : ''),
                maritalStatusPrefix: (data?.maritalStatusPrefix != null ? data?.maritalStatusPrefix : ''),
                isActive: (data?.isActive != null ? data?.isActive : '')
              });
            }
          }
        })
      })
  }

  confirmToEdit() {
    this.viewEdit = false;
    this.viewSave = true
    this._fs._form.enable()
  }

  discardFeature(){
    this._fs._form.reset()
  }

}
