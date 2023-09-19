import { Component, Injector, OnInit } from '@angular/core';
import { URLz } from 'src/app/enums/url.enum';
import { BaseListClass } from '../../../../sharedClasses/base-list-class';

@Component({
  selector: 'demo-graphic-setup-list',
  templateUrl: './demo-graphic-setup-list.component.html',
  styleUrls: ['./demo-graphic-setup-list.component.css']
})
export class DemoGraphicSetupComponent extends BaseListClass implements OnInit {

  constructor(
    injector : Injector
  ) {
      super(injector);
  }

  ngOnInit() {
    this._pathLocation = '/Personal_Management/demographic/demo_graphic';
    this.initTables();
  }

  initTables(){
    this._reset(URLz.GET_ALL_PMDEMOGRAPHIC_LIST)
    this.initForm();
    this._tbls[URLz.GET_ALL_PMDEMOGRAPHIC_LIST].columns = [
      'id',
      // 'actions',
      // 'company_id',
      'demographic_level_title',
      'demo_graphic_title',
      'demo_graphic_prefix',
      'parent_name',
      'geofences_value',
      'is_active',
      'created_date',
      'modified_date'
    ];
    this._tbls[URLz.GET_ALL_PMDEMOGRAPHIC_LIST].endpoint = URLz.GET_ALL_PMDEMOGRAPHIC_LIST;
    this._refresh(URLz.GET_ALL_PMDEMOGRAPHIC_LIST)
  }


  initForm(){
    this._tbls[URLz.GET_ALL_PMDEMOGRAPHIC_LIST].formFilter = this._fs._fb.group({
      companyId:[1],
      levelId:[null]
    })

  }


  filteredRecords(id:number){
    this._tbls[URLz.GET_ALL_PMDEMOGRAPHIC_LIST].formFilter.get('levelId').patchValue(id, {emitEvent: false})
    this._refresh(URLz.GET_ALL_PMDEMOGRAPHIC_LIST)
  }

}
