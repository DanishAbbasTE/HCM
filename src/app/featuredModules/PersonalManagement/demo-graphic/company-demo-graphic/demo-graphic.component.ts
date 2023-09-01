import { Component, Injector, OnInit } from '@angular/core';
import { BaseForm } from '../../../../sharedClasses/base-from';
import { URLz } from 'src/app/enums/url.enum';
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

  constructor( injector : Injector) {
    super(injector);
    // this.param.endpoint = URLz.CONFIG_DEMO_GRAPHIC
  }

  ngOnInit(): void {
    this.getDemoGraphicLevel()
  }

  getDemoGraphicLevel(){
    this._http.get({
      endpoint: URLz.CONFIG_DEMO_GRAPHIC,
      query: {
        companyId : 1,
        levelId : 1,
        // type : window.location.pathname.includes('allow_Bank') ? "0" : "1"
      }
    }).subscribe((res : any)=>{
        console.log(res);
    })
  }

}
