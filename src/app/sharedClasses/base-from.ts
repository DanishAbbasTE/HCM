import { Component, Injector, OnDestroy } from "@angular/core";
import { BaseJoinAction } from "./base-join-actions";
@Component({template: ''})
export abstract class BaseForm extends BaseJoinAction implements OnDestroy{
  // Services Injection
  constructor(public override injector: Injector) {
    super(injector);
    this.resetProperties();
  }

  override ngOnDestroy():  void {
    super.ngOnDestroy()
  }

}
