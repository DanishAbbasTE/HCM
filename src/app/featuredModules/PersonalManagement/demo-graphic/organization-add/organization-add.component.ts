import { Component, Injector, OnInit } from '@angular/core';
import { BaseForm } from '../../../../sharedClasses/base-from';
import { URLz } from 'src/app/enums/url.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throttleTime } from 'rxjs';

@Component({
  selector: 'app-organization-add',
  templateUrl: './organization-add.component.html',
  styleUrls: ['./organization-add.component.css']
})
export class OrganizationAddComponent extends BaseForm implements OnInit {

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
      endpoint: URLz.COFIG_ORGANIZATION_DEMO_GRAPHIC,
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
      endpoint: URLz.PM_ORG_LEVEL_BY_LEVEL_ID,
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
    this._fs._form?.get('organizationLevelId').valueChanges
      ?.pipe(
        throttleTime(450) // For Edit Case
      )
      .subscribe((val :any) => {
          console.log(val);
          this.getDemoGraphicLevelchild(val);
      });
  }

  initForm(){
    this._fs._form = this._fb.group({
      companyId:[1],
      organizationLevelId:['',this._vs._vals('Organization level id')],
      organizationTitle:['',this._vs._val('Demographic Title')],
      organizationPrefix:['', this._vs._val('Demographic Prefix')],
      parentId:['',this._vs._vals('Organization')],
      IsActive:['',this._vs._val('is Active')]
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
          endpoint: URLz.SAVE_ORG_SETUP,
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
