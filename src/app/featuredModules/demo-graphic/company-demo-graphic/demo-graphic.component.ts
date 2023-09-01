import { Component, Injector, OnInit } from '@angular/core';
import { BaseForm } from '../../../sharedClasses/base-from';
import { environment } from 'src/environments/environment';
import { URLz } from 'src/app/enums/url.enum';
@Component({
  selector: 'app-demo-graphic',
  templateUrl: './demo-graphic.component.html',
  styleUrls: ['./demo-graphic.component.css']
})
export class DemoGraphicComponent extends BaseForm implements OnInit {

  constructor( injector : Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.param.endpoint = URLz.CONFIG_DEMO_GRAPHIC
  }

}
