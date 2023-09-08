import { Component, Injector, OnInit } from '@angular/core';
import { BaseForm } from '../../../../sharedClasses/base-from';
import { URLz } from 'src/app/enums/url.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throttleTime } from 'rxjs';
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
      },
      error: (errorz: HttpErrorResponse) => {

      }
    })
  }

  loadChildDemoGraphic(){
    this._fs._form?.get('demographicLevelId').valueChanges
      ?.pipe(
        throttleTime(450) // For Edit Case
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
      parentId:['',this._vs._vals('Demographic')],
      geofencesValue:['',this._vs._val('Geofence value')],
      IsActive:['']
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
          endpoint: URLz.SAVE_DEMOGRAPHIC_SETUP,
          body: this._fs._form.value
        })
        .subscribe((res)=>{
            if(res != null){
                  console.log(res);
                  this._swl.prompts(
                    {
                      title: 'Save',
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
