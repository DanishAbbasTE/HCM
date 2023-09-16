import { Component, Injector, OnInit } from '@angular/core';
import { URLz } from 'src/app/enums/url.enum';
import { BaseListClass } from '../../../../../sharedClasses/base-list-class';

@Component({
  selector: 'app-marital-status-list',
  templateUrl: './marital-status-list.component.html',
  styleUrls: ['./marital-status-list.component.css']
})
export class MaritalStatusListComponent extends BaseListClass implements OnInit {

  constructor(
    injector : Injector
  ) {
      super(injector);
  }

  ngOnInit() {
    this._pathLocation = '/Personal_Management/employee/marital_satus_add';
    this.initTables();
  }

  initTables(){
    this._reset(URLz.GET_ALL_MARITAL_STATUS_LIST)
    this.initForm();
    this._tbls[URLz.GET_ALL_MARITAL_STATUS_LIST].columns = [
      'id',
      // 'actions',
      // 'company_id',
      'marital_status_title',
      'marital_status_prefix',
      'is_active',
      'created_date',
      'modified_date'
    ];
    this._tbls[URLz.GET_ALL_MARITAL_STATUS_LIST].endpoint = URLz.GET_ALL_MARITAL_STATUS_LIST;
    this._refresh(URLz.GET_ALL_MARITAL_STATUS_LIST)
  }


  initForm(){
    this._tbls[URLz.GET_ALL_MARITAL_STATUS_LIST].formFilter = this._fs._fb.group({
      companyId:[1],
    })

  }

}
