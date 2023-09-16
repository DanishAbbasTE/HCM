import { Component, Injector, OnInit } from '@angular/core';
import { BaseForm } from '../../../../sharedClasses/base-from';
import { URLz } from 'src/app/enums/url.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { distinctUntilChanged, throttleTime } from 'rxjs';
import { DemoGraphicSetup } from 'src/app/interfaces/personalManagement/demo-graphic-setup';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-demo-graphic',
  templateUrl: './demo-graphic.component.html',
  styleUrls: ['./demo-graphic.component.css']
})
export class DemoGraphicComponent extends BaseForm implements OnInit {

  public Parentlevels :any[] = [];
  public childlevels :any[] = [];

  constructor( injector : Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.getDemoGraphicLevelParent(0);
    this.initForm();
    this.loadChildDemoGraphic()

    this._activeId = this._fhs._getURLParam('id');
    if (this._activeId) {
      this._showSave = false;
      this._showEdit = true;
      this.patchData();
    }
  }

  getDemoGraphicLevelParent(levelId : number | string){
    this._http.gets({
      endpoint: URLz.CONFIG_DEMO_GRAPHIC,
      query: {
        companyId : 1,
        levelId : levelId,
      }
    }).subscribe({
      next: (res : any) => {
        this.Parentlevels = res.data;
      },
      error: (errorz: HttpErrorResponse) => {

      }
    })
  }

  getDemoGraphicLevelchild(levelId : number | string){
    this._http.gets({
      endpoint: URLz.LOAD_PM_DEMOGRAPHIC_LEVELS_BY_FILTERS,
      query: {
        companyId : 1,
        levelId : levelId
      }
    }).subscribe({
      next: (res : any) => {
        this.childlevels = res.data;
        if(res.data.length == 0){
            this._fs._form.get('parentId').patchValue(0);
        }
      },
      error: (errorz: HttpErrorResponse) => {

      }
    })
  }

  loadChildDemoGraphic(){
    this._fs._form?.get('demographicLevelId').valueChanges
      ?.pipe(
        throttleTime(450),
        distinctUntilChanged()
      )
      .subscribe((val :any) => {
          console.log(val);
          if(this.emptyCheck(val)){
            this.getDemoGraphicLevelchild(val);
          }
      });
  }

  initForm(){
    this._fs._form = this._fb.group({
      companyId:[1],
      demographicLevelId:['',this._vs._vals('Demographic level id')],
      demographicTitle:['',this._vs._val('Demographic Title')],
      demographicPrefix:['', this._vs._val('Demographic Prefix')],
      parentId:[0],
      geofencesValue:['',this._vs._val('Geofence value')],
      IsActive:[true]
    })
  }

  patchData() {
    this._fs._form.disable();
    this._http.get({
        url: environment.API_URL,
        endpoint: URLz.GE_DEMO_GRAPHIC_BY_ID,
        query: {id:this._activeId},
      }).subscribe((res:any) => {
      if(res != undefined){
        const data : DemoGraphicSetup = res.data;
        if(data !== null){
          this._fs._form.patchValue({
            companyId: (data?.companyId != null ? data?.companyId : ''),
            demographicLevelId : (data?.demographicLevelId != null ? data?.demographicLevelId : ''),
            demographicTitle : (data?.demographicTitle != null ? data?.demographicTitle : ''),
            demographicPrefix : (data?.demographicPrefix != null ? data?.demographicPrefix : ''),
            parentId : (data?.parentId != null  ? data?.parentId : ''),
            geofencesValue : (data?.geofencesValue != null ? data?.geofencesValue : ''),
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
          endpoint: URLz.SAVE_DEMOGRAPHIC_SETUP,
          body: this._fs._form.value
        })
        .subscribe((res)=>{
            if(res != null){
                  console.log(res);
                  this._swl.prompts(
                    {
                      title: this._activeId ? 'Update' :'Save',
                      text: "Want to leave or stay here",
                    }).then((result) => {
                    if (result.isConfirmed) {
                      this._swl.swal('SuccessFully submited!', 'success', 'success').then((result) => {
                        this._router.navigate(['/Personal_Management/demographic/demo_graphic_list'])
                      })
                      this._vs._toastr_success('SuccessFully submited','success');
                    } else if (result.isDismissed) {
                      this._swl.swal('SuccessFully submited!', 'success', 'success')
                      this._vs._toastr_success('SuccessFully submited','success');
                      this._fs._form.reset();
                    }
                  })
            }
        })
      }

  }

}
