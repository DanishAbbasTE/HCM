import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { URLz } from 'src/app/enums/url.enum';
import { GenericSideBar } from 'src/app/interfaces/common-interfaces/generic-side-bar';
import { ServerMultipleResponse } from 'src/app/interfaces/server-multiple-response';
import { BaseForm } from 'src/app/sharedClasses/base-from';

@Component({
  selector: 'sider-bar',
  templateUrl: './sider-bar.component.html',
  styleUrls: ['./sider-bar.component.css']
})
export class SiderBarComponent extends BaseForm implements OnInit {

  @Input() url = '';
  @Input() sideBarName = '';
  @Output() filterList: EventEmitter<any> = new EventEmitter();

  SideBarData :GenericSideBar[] = [];
  constructor( injector : Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.getSiderBar();
  }


  getSiderBar(){
    this._http.gets({
      endpoint: this.url,
      query: {
        companyId : 1,
      }
    }).subscribe({
      next: (res : ServerMultipleResponse) => {
        this.SideBarData = res.data;
      },
      error: (errorz: HttpErrorResponse) => {

      }
    })
  }


  getFilteredRecords(id: number){
    this.filterList.emit(id);
  }

}
