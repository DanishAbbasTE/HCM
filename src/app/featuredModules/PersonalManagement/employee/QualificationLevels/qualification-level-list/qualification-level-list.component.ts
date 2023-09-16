import { Component, Injector, OnInit } from '@angular/core';
import { URLz } from 'src/app/enums/url.enum';
import { BaseListClass } from '../../../../../sharedClasses/base-list-class';

@Component({
  selector: 'app-qualification-level-list',
  templateUrl: './qualification-level-list.component.html',
  styleUrls: ['./qualification-level-list.component.css']
})
export class QualificationLevelListComponent extends BaseListClass implements OnInit {

  constructor(
    injector : Injector
  ) {
      super(injector);
  }

  ngOnInit() {
    this._pathLocation = '/Personal_Management/employee/qualification_level_add';
    this.initTables();
  }

  initTables(){
    this._reset(URLz.GET_ALL_QUALIFICATION_LEVEL_LIST)
    this.initForm();
    this._tbls[URLz.GET_ALL_QUALIFICATION_LEVEL_LIST].columns = [
      'id',
      // 'actions',
      // 'company_id',
      'qulification_level_title',
      'qulification_level_prefix',
      'level_no',
      'is_active',
      'created_date',
      'modified_date'
    ];
    this._tbls[URLz.GET_ALL_QUALIFICATION_LEVEL_LIST].endpoint = URLz.GET_ALL_QUALIFICATION_LEVEL_LIST;
    this._refresh(URLz.GET_ALL_QUALIFICATION_LEVEL_LIST)
  }


  initForm(){
    this._tbls[URLz.GET_ALL_QUALIFICATION_LEVEL_LIST].formFilter = this._fs._fb.group({
      companyId:[1],
    })

  }


}
