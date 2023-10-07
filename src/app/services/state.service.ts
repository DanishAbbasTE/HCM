import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ACTION } from '../enums/action.enum';
// import {
//   FlattenSideBarMenus,
//   Permission,
//   SideBarMenus,
// } from '../interface/common/router-module';

@Injectable({
  providedIn: 'root',
})
export class StateService {

  // sideBarMenus: SideBarMenus[];
  // flattenSideBarMenus: FlattenSideBarMenus[];
  // permission: Permission[];

  // For Ngx Loading Spinner
  public isLoading = new BehaviorSubject(false);
  lng: string;
  CURRENT_FONTS: string = 'eng__font'
  constructor(public injector: Injector) {
    this.lng = 'en';
  }
  // public checkPermission(action: ACTION) {
  //   return this.permission?.find((a) => a.name == action);
  // }

  public BLOOD_GROUP = [
    {id: 1, title: 'AB+'},
    {id: 1, title: 'AB-'},
    {id: 1, title: 'A+'},
    {id: 1, title: 'A-'},
    {id: 1, title: 'B+'},
    {id: 1, title: 'B-'},
    {id: 1, title: 'O+'},
    {id: 1, title: 'O-'}
  ]

}
