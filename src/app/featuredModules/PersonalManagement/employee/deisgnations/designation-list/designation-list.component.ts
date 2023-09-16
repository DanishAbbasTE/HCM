import { Component, Injector, OnInit } from '@angular/core';
import { URLz } from 'src/app/enums/url.enum';
import { BaseListClass } from '../../../../../sharedClasses/base-list-class';

@Component({
  selector: 'app-designation-list',
  templateUrl: './designation-list.component.html',
  styleUrls: ['./designation-list.component.css']
})
export class DesignationListComponent extends BaseListClass implements OnInit {

  constructor(
    injector : Injector
  ) {
      super(injector);
  }

  ngOnInit() {
    this._pathLocation = '/Personal_Management/employee/designation_add';
    this.initTables();
  }

  initTables(){
    this._reset(URLz.GET_ALL_DESIGNATION_LIST)
    this.initForm();
    this._tbls[URLz.GET_ALL_DESIGNATION_LIST].columns = [
      'id',
      // 'actions',
      // 'company_id',
      'designation_title',
      'designation_prefix',
      'is_active',
      'created_date',
      'modified_date'
    ];
    this._tbls[URLz.GET_ALL_DESIGNATION_LIST].endpoint = URLz.GET_ALL_DESIGNATION_LIST;
    this._refresh(URLz.GET_ALL_DESIGNATION_LIST)
  }


  initForm(){
    this._tbls[URLz.GET_ALL_DESIGNATION_LIST].formFilter = this._fs._fb.group({
      companyId:[1],
    })

  }

}
