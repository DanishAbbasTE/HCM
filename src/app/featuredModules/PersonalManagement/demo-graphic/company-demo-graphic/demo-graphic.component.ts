import { Component, Injector, OnInit } from '@angular/core';
import { BaseForm } from '../../../../sharedClasses/base-from';
import { URLz } from 'src/app/enums/url.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-demo-graphic',
  templateUrl: './demo-graphic.component.html',
  styleUrls: ['./demo-graphic.component.css']
})
export class DemoGraphicComponent extends BaseForm implements OnInit {

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  public levels :any[] = [];

  constructor( injector : Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.getDemoGraphicLevel(0);
    this.initForm();
  }

  getDemoGraphicLevel(levelId : number | string){
    this._http.gets({
      endpoint: URLz.CONFIG_DEMO_GRAPHIC,
      query: {
        companyId : 1,
        levelId : levelId,
        // type : window.location.pathname.includes('allow_Bank') ? "0" : "1"
      }
    }).subscribe({
      next: (res : any) => {
        this.levels = res.data;
      },
      error: (errorz: HttpErrorResponse) => {

      }
    })
  }

  loadChildDemoGraphic(){
    // this._fs._form?.g.valueChanges
    //   ?.pipe(
    //     throttleTime(450) // For Edit Case
    //   )
    //   .subscribe((val) => {
    //     if (this.url === URLz.ORG) {
    //       this._http.org_id = val;
    //     } else if (this.url === URLz.ORG_SYSTEM) {
    //       this._http.sys_id = val;
    //     }
    //     if (childType === 'DD') this.loadChildDD(val);
    //   });
  }

  initForm(){
    this._fs._form = this._fb.group({
      companyId:[1],
      demographicLevelId:['',this._vs._vals('Demographic level id')],
      demographicTitle:['',this._vs._vals('Demographic Title')],
      demographicPrefix:['', this._vs._val('Demographic Prefix',{min: 1,max: 10000000})],
      parentId:['',this._vs._vals('Demographic')],
      geofencesValue:['',this._vs._vals('Geofence value')],
      IsActive:['']
    })
  }

  submit(){
    console.log(this._fs._form.value);
    this._http.create({
      url: environment.API_URL,
      endpoint: URLz.SAVE_DEMOGRAPHIC_SETUP,
      body: this._fs._form.value
    })
    .subscribe((res)=>{
        if(res != null){
              console.log(res);
        }
    })
}

}
