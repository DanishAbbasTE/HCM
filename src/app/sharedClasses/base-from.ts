import { Component, Injector } from "@angular/core";
import { BaseJoinAction } from "./base-join-actions";
@Component({template: ''})
export abstract class BaseForm extends BaseJoinAction {
  _pathLocation: string | undefined;
  constructor(injector: Injector) {
    super(injector);
    this.resetProperties();
  }
}
