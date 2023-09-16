import { Component, Injector, OnInit } from '@angular/core';
import { URLz } from 'src/app/enums/url.enum';
import { BaseListClass } from '../../../../sharedClasses/base-list-class';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent extends BaseListClass implements OnInit {

  constructor(
    injector : Injector
  ) {
      super(injector);
  }

  ngOnInit() {
    this._pathLocation = '/Personal_Management/demographic/org_add';
    this.initTables();
  }

  initTables(){
    this._reset(URLz.GET_ALL_PM_ORGANIZATION_LIST)
    this.initForm();
    this._tbls[URLz.GET_ALL_PM_ORGANIZATION_LIST].columns = [
      'id',
      // 'actions',
      // 'company_id',
      'organization_level_title',
      'organization_title',
      'organization_prefix',
      'parent_name',
      'is_active',
      'created_date',
      'modified_date'
    ];
    this._tbls[URLz.GET_ALL_PM_ORGANIZATION_LIST].endpoint = URLz.GET_ALL_PM_ORGANIZATION_LIST;
    this._refresh(URLz.GET_ALL_PM_ORGANIZATION_LIST)
  }


  initForm(){
    this._tbls[URLz.GET_ALL_PM_ORGANIZATION_LIST].formFilter = this._fs._fb.group({
      companyId:[1],
    })

  }

}
