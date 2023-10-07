import { Component, Injector, OnInit } from '@angular/core';
import { BaseForm } from '../../../../../sharedClasses/base-from';
import { URLz } from 'src/app/enums/url.enum';
import { environment } from 'src/environments/environment';
import { WeeklyOff } from 'src/app/interfaces/personalManagement/weeklyoff';
import { FormControl } from '@angular/forms';


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
      monday:[false],
      tuesday:[false],
      wednesday:[false],
      thursday:[false],
      friday:[false],
      saturday:[false],
      sunday:[false],
      // IsActive:['',this._vs._val('Is Active')]
    })
  }

  patchData() {
    this._fs._form.disable();
    this._http.get({
        url: environment.API_URL,
        endpoint: URLz.GE_WEEKLYOFF_BY_ID,
        query: {id:this._activeId},
      }).subscribe((res:any) => {
      if(res != undefined){
        const data : WeeklyOff = res.data;
        if(data !== null){
          this._fs._form.patchValue({
            id: (data?.id != null ? data?.id : ''),
            companyId: (data?.companyId != null ? data?.companyId : ''),
            monday : (data?.monday != null ? data?.monday : ''),
            tuesday : (data?.tuesday != null ? data?.tuesday : ''),
            wednesday : (data?.wednesday != null ? data?.wednesday : ''),
            thursday : (data?.thursday != null ? data?.thursday : ''),
            friday : (data?.friday != null ? data?.friday : ''),
            saturday : (data?.saturday != null ? data?.saturday : ''),
            sunday : (data?.sunday != null ? data?.sunday : ''),
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
          endpoint: URLz.SAVE_WEEKLY_OFFS,
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
                  this._fhs.relocate('/Personal_Management/employee/weekly_off_list')
                })
                this._vs._toastr_success('SuccessFully submited','success');
              } else if (result.isDismissed) {
                  this._swl.swal('SuccessFully submited!', 'success', 'success')
                  this._vs._toastr_success('SuccessFully submited','success');
                  this._fs._form.reset();
                  this._fs._form.removeControl('id');
                  this._fhs.relocate('/Personal_Management/employee/weekly_off_add');
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
