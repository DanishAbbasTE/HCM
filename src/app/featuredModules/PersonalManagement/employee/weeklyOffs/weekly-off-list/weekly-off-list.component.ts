import { Component, Injector, OnInit } from '@angular/core';
import { URLz } from 'src/app/enums/url.enum';
import { BaseListClass } from '../../../../../sharedClasses/base-list-class';

@Component({
  selector: 'app-weekly-off-list',
  templateUrl: './weekly-off-list.component.html',
  styleUrls: ['./weekly-off-list.component.css']
})
export class WeeklyOffListComponent extends BaseListClass implements OnInit {

  constructor(
    injector : Injector
  ) {
      super(injector);
  }

  ngOnInit() {
    this._pathLocation = '/Personal_Management/employee/weekly_off_add';
    this.initTables();
  }

  initTables(){
    this._reset(URLz.GET_ALL_WEEKLY_OFF_LIST)
    this.initForm();
    this._tbls[URLz.GET_ALL_WEEKLY_OFF_LIST].columns = [
      'id',
      'actions',
      'company_id',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
      'is_active',
      'created_date',
      'modified_date'
    ];
    this._tbls[URLz.GET_ALL_WEEKLY_OFF_LIST].endpoint = URLz.GET_ALL_WEEKLY_OFF_LIST;
    this._refresh(URLz.GET_ALL_WEEKLY_OFF_LIST)
  }


  initForm(){
    this._tbls[URLz.GET_ALL_WEEKLY_OFF_LIST].formFilter = this._fs._fb.group({
      companyId:[1],
    })

  }

}
