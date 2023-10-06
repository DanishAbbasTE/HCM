import { Component, Injector, OnInit } from '@angular/core';
import { URLz } from 'src/app/enums/url.enum';
import { BaseListClass } from 'src/app/sharedClasses/base-list-class';

@Component({
  selector: 'app-create-employee-list',
  templateUrl: './create-employee-list.component.html',
  styleUrls: ['./create-employee-list.component.css']
})
export class CreateEmployeeListComponent extends BaseListClass implements OnInit {

  constructor(injector: Injector) { 
    super(injector)
  }

  ngOnInit(): void {
    this._pathLocation = "/Personal_Management/employee/create_employee_add";
    this.initTables()
  }

  initTables(){
    this._reset(URLz.GET_ALL_EMPLOYEE);
    this.initForm();
    this._tbls[URLz.GET_ALL_EMPLOYEE].columns = [
      'id',
      // 'actions',
      // 'company_id',
      'employee_name',
      'employee_address',
      'employee_email',
      'empolyee_no',
      'created_date',
      'modified_date'
    ];
    console.log(this._tbls[URLz.GET_ALL_EMPLOYEE]);
    this._tbls[URLz.GET_ALL_EMPLOYEE].endpoint = URLz.GET_ALL_EMPLOYEE;
    this._refresh(URLz.GET_ALL_EMPLOYEE);
  }

  initForm(){
    this._tbls[URLz.GET_ALL_EMPLOYEE].formFilter = this._fs._fb.group({
      companyId:[1],
      levelId:[null]
    })
  }

  filteredRecords(id:number){
    this._tbls[URLz.GET_ALL_EMPLOYEE].formFilter.get('levelId').patchValue(id, {emitEvent: false})
    this._reset(URLz.GET_ALL_EMPLOYEE);
    this._refresh(URLz.GET_ALL_EMPLOYEE)
  }
}
