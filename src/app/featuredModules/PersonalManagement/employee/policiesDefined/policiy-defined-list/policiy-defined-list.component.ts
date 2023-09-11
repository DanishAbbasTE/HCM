import { Component, Injector, OnInit } from '@angular/core';
import { URLz } from 'src/app/enums/url.enum';
import { BaseListClass } from '../../../../../sharedClasses/base-list-class';

@Component({
  selector: 'app-policiy-defined-list',
  templateUrl: './policiy-defined-list.component.html',
  styleUrls: ['./policiy-defined-list.component.css']
})
export class PoliciyDefinedListComponent extends BaseListClass implements OnInit {

  constructor(
    injector : Injector
  ) {
      super(injector);
  }

  ngOnInit() {
    this._pathLocation = '/Personal_Management/employee/policy_defined_add';
    this.initTables();
  }

  initTables(){
    this._reset(URLz.GET_ALL_POLICY_DEFINED_LIST)
    this.initForm();
    this._tbls[URLz.GET_ALL_POLICY_DEFINED_LIST].columns = [
      'id',
      'actions',
      'company_id',
      'policy_defined_title',
      'policy_defined_prefix',
      'is_active',
      'created_date',
      'modified_date'
    ];
    this._tbls[URLz.GET_ALL_POLICY_DEFINED_LIST].endpoint = URLz.GET_ALL_POLICY_DEFINED_LIST;
    this._refresh(URLz.GET_ALL_POLICY_DEFINED_LIST)
  }


  initForm(){
    this._tbls[URLz.GET_ALL_POLICY_DEFINED_LIST].formFilter = this._fs._fb.group({
      companyId:[1],
    })

  }

}
