import { Component, Injector, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogConfig } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { DI_Table, DI_Tables } from '../interfaces/common-interfaces/di-table';
import { HttpServiceParam } from '../interfaces/http-service-param';
import { BaseForm } from './base-from';

@Component({
  template: '',
})
// In Base Class append all the properties / methods with _ (underscore)
export abstract class BaseListClass extends BaseForm implements OnDestroy{
  constructor(injector: Injector) {
    super(injector);
    this.resetProperties();
  }
  // Components Properties
  _pathLocation: string | undefined;
  // Table Properties
  _tbls: DI_Tables | any = {};
  _tblsArray: any[] | undefined;
  listParam = {}
  _reset(tableName: string | any) {
    this._tbls[tableName] = {
      query: {},
      dataSource: new MatTableDataSource(<any>[]),
      search: {}, // not in use old
      length: 0,
      index: 0,
      prevIndex: 0,
      size: 10,
      sizes: [5, 10, 20],
      orderBy: '',
      orderType: '',
      // This Properties needs to be set as per Old Values
      tableName,
      columns: this._tbls[tableName]?.columns,
      url: this._tbls[tableName]?.url,
      endpoint: this._tbls[tableName]?.endpoint,
      form: this._tbls[tableName]?.form,
      formBody: this._tbls[tableName]?.formBody,
      formFilter: this._tbls[tableName]?.formFilter
    };
    if (this._tbls[tableName]?.form) this._tbls[tableName].form.reset();
    if (this._tbls[tableName]?.formBody) this._tbls[tableName].formBody.reset();
  }
  _sort(sort: Sort, tableName: string) {
    this._tbls[tableName].orderBy = sort.active;
    this._tbls[tableName].orderType = sort.direction;
    this._refresh(tableName);
  }
  _paginate(event?: PageEvent | any, tableName?: string | any): PageEvent {
    this._tbls[tableName].index = event.pageIndex;
    this._tbls[tableName].length = event.length;
    this._tbls[tableName].size = event.pageSize;
    this._tbls[tableName].prevIndex = event.previousPageIndex;
    this._refresh(tableName);
    return event;
  }
  // Search Functionality
  _refresh(tableName: string) {
    this._vs._toastr.clear();
    if (!this.emptyCheck(this._tbls[tableName]?.url)){
      this._tbls[tableName].url = environment.API_URL;
    }
    const parma: HttpServiceParam = {
      url: this._tbls[tableName].url,
      endpoint: this._tbls[tableName].endpoint,
      query: {
        ...this.listParam,
        ...this._tbls[tableName]?.form?.value,
        ...this._tbls[tableName]?.formFilter?.value,
        ...this._tbls[tableName]?.query,
        pageSize: this._tbls[tableName].size,
        pageNumber: this._tbls[tableName].index + 1,
        order_by: this._tbls[tableName].orderBy,
        order_type: this._tbls[tableName].orderType,
      },
    }
    this.callAPI(tableName, parma)
  }
  callAPI = (tableName: string, param: HttpServiceParam) => {
    this._http
    .getListing(param).subscribe((res) => {
      this._tbls[tableName].dataSource.data = res?.data?.data;
      this._tbls[tableName].length = res?.data?.recordsTotal;
    });
  }
  _formCreator(tbl: DI_Table) {
    tbl.form = this._fb.group({});
    tbl.columns.forEach((control) => {
      tbl.form.addControl(control, new FormControl(''));
    });
  }
  // // Turn in it into Object of keys
  // iterateTables(callBackFunction) {
  //   this._tblsArray.forEach((tbl) => {
  //     callBackFunction(tbl);
  //   });
  //   // Object.keys(this._tbls).forEach((key: string) => {
  //   //   callBackFunction(this._tbls[key])
  //   // })
  // }
  _status = {
    id: '',
    activate: '',
  };
  _switch(id = null) {
    if (id) this._router.navigate([this._pathLocation, { id }]);
    else this._router.navigate([this._pathLocation]);
  }
  // user specific
  _switchForUser(id = null) {
    if (id) this._router.navigate([this._pathLocation, { userId: id }]);
    else this._router.navigate([this._pathLocation]);
  }
  // NEW
  // _statusChanged(
  //   activate: boolean,
  //   id: number,
  //   tableName: string) {
  //     const tbl = this._tbls[tableName]
  //     const httpParam: HttpServiceParam = {
  //       url: tbl.url,
  //       endpoint: tbl.endpoint,
  //       body: {
  //         id,
  //         activate: +activate
  //       }
  //     }
  //     this._swl.statusChange(
  //       activate,
  //       httpParam,
  //       () => {
  //         this._refresh(tableName)
  //     })
  // }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  // openImage(data, title) {
  //   const config: MatDialogConfig = {
  //     panelClass: 'dialog-responsive',
  //     data: { source: data, title },
  //   };
  //   const dialogRef = this._dialog.open(ImgViewComponent, config);
  //   dialogRef.afterClosed().subscribe()
  // }
  override ngOnDestroy():  void {
    super.ngOnDestroy()
  }
}
