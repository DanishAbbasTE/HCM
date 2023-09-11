import { Component, Injector, OnInit } from '@angular/core';
import { URLz } from 'src/app/enums/url.enum';
import { BaseListClass } from '../../../../../sharedClasses/base-list-class';

@Component({
  selector: 'app-religion-list',
  templateUrl: './religion-list.component.html',
  styleUrls: ['./religion-list.component.css']
})
export class ReligionListComponent extends BaseListClass implements OnInit {

  constructor(
    injector : Injector
  ) {
      super(injector);
  }

  ngOnInit() {
    this._pathLocation = '/Personal_Management/employee/religion_add';
    this.initTables();
  }

  initTables(){
    this._reset(URLz.GET_ALL_RELIGION_LIST)
    this.initForm();
    this._tbls[URLz.GET_ALL_RELIGION_LIST].columns = [
      'id',
      'actions',
      'company_id',
      'religion_title',
      'religion_prefix',
      'is_active',
      'created_date',
      'modified_date'
    ];
    this._tbls[URLz.GET_ALL_RELIGION_LIST].endpoint = URLz.GET_ALL_RELIGION_LIST;
    this._refresh(URLz.GET_ALL_RELIGION_LIST)
  }


  initForm(){
    this._tbls[URLz.GET_ALL_RELIGION_LIST].formFilter = this._fs._fb.group({
      companyId:[1],
    })

  }

}
