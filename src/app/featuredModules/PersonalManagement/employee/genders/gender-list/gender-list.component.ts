import { Component, Injector, OnInit } from '@angular/core';
import { URLz } from 'src/app/enums/url.enum';
import { BaseListClass } from '../../../../../sharedClasses/base-list-class';

@Component({
  selector: 'app-gender-list',
  templateUrl: './gender-list.component.html',
  styleUrls: ['./gender-list.component.css']
})
export class GenderListComponent extends BaseListClass implements OnInit {

  constructor(
    injector : Injector
  ) {
      super(injector);
  }

  ngOnInit() {
    this._pathLocation = '/Personal_Management/employee/gender_add';
    this.initTables();
  }

  initTables(){
    this._reset(URLz.GET_ALL_GENDER_LIST)
    this.initForm();
    this._tbls[URLz.GET_ALL_GENDER_LIST].columns = [
      'id',
      // 'actions',
      // 'company_id',
      'gender_title',
      'gender_prefix',
      'is_active',
      'created_date',
      'modified_date'
    ];
    this._tbls[URLz.GET_ALL_GENDER_LIST].endpoint = URLz.GET_ALL_GENDER_LIST;
    this._refresh(URLz.GET_ALL_GENDER_LIST)
  }


  initForm(){
    this._tbls[URLz.GET_ALL_GENDER_LIST].formFilter = this._fs._fb.group({
      companyId:[1],
    })

  }

}
