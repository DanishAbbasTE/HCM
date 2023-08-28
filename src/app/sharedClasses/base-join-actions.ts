import { Component, OnDestroy } from "@angular/core";
import { HttpServiceParam } from "../interfaces/http-service-param";
import { Custom } from "../static/custom";
import { BaseServiceInjector } from "./base-service-injector";


@Component({template: ''})
export abstract class BaseJoinAction extends BaseServiceInjector implements OnDestroy   {
  resetProperties() {
    this._fhs._activeRoute = this._activeRoute;
    this._fb = this._fs._fb;
  }
  emptyCheck(val: any) {
    return Custom.emptyCheck(val);
  }
  mergeParam(providedParameters: HttpServiceParam): HttpServiceParam {
    return { ...this.param, ...providedParameters };
  }
  routerStrategy(){
    this._router.routeReuseStrategy.shouldReuseRoute = () =>  false;
  }

  ngOnDestroy():  void {
    this._vs._submitted = false;
    this._vs.showWarning = false;
    this.subscriptionArray.forEach(subs => {
      subs?.unsubscribe();
    })
    // Swal.close();
    // this._vs._toastr.clear();
  }
}
