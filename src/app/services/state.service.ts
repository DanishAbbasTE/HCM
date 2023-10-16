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
    {id: 2, title: 'AB-'},
    {id: 3, title: 'A+'},
    {id: 3, title: 'A-'},
    {id: 4, title: 'B+'},
    {id: 5, title: 'B-'},
    {id: 6, title: 'O+'},
    {id: 7, title: 'O-'}
  ]

  public USER_GROUP = [
    {id: 1, title: ['1']},
    {id: 2, title: ['2']},
    {id: 3, title: ['3']},
    {id: 4, title: ['4']},
  ]
  
  public REALATIONS = [
    {id: 1, title: 'Mother'},
    {id: 2, title: 'Father'},
    {id: 3, title: 'Son'},
    {id: 4, title: 'Daughter'},
    {id: 5, title: 'Brother'},
    {id: 6, title: 'Sister'},
  ]

}
