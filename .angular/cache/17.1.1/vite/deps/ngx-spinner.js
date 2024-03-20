import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-UBYGCAXP.js";
import {
  DomSanitizer
} from "./chunk-MJBJD3DU.js";
import "./chunk-CCRHDC6F.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-4GXVWYPA.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Pipe,
  ViewChild,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-7RIISPBH.js";
import {
  BehaviorSubject,
  Subject,
  __spreadProps,
  __spreadValues,
  filter,
  takeUntil
} from "./chunk-IPLFCT6M.js";

// node_modules/ngx-spinner/fesm2022/ngx-spinner.mjs
var _c0 = ["overlay"];
function NgxSpinnerComponent_div_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div");
  }
}
function NgxSpinnerComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NgxSpinnerComponent_div_0_div_2_div_1_Template, 1, 0, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.spinner.class);
    ɵɵstyleProp("color", ctx_r2.spinner.color);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.spinner.divArray);
  }
}
function NgxSpinnerComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 7);
    ɵɵpipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, ctx_r3.template), ɵɵsanitizeHtml);
  }
}
function NgxSpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1, 2);
    ɵɵtemplate(2, NgxSpinnerComponent_div_0_div_2_Template, 2, 5, "div", 3)(3, NgxSpinnerComponent_div_0_div_3_Template, 2, 3, "div", 4);
    ɵɵelementStart(4, "div", 5);
    ɵɵprojection(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("background-color", ctx_r0.spinner.bdColor)("z-index", ctx_r0.spinner.zIndex)("position", ctx_r0.spinner.fullScreen ? "fixed" : "absolute");
    ɵɵproperty("@.disabled", ctx_r0.disableAnimation)("@fadeIn", "in");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.template);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.template);
    ɵɵadvance();
    ɵɵstyleProp("z-index", ctx_r0.spinner.zIndex);
  }
}
var _c1 = ["*"];
var LOADERS = {
  "ball-8bits": 16,
  "ball-atom": 4,
  "ball-beat": 3,
  "ball-circus": 5,
  "ball-climbing-dot": 4,
  "ball-clip-rotate": 1,
  "ball-clip-rotate-multiple": 2,
  "ball-clip-rotate-pulse": 2,
  "ball-elastic-dots": 5,
  "ball-fall": 3,
  "ball-fussion": 4,
  "ball-grid-beat": 9,
  "ball-grid-pulse": 9,
  "ball-newton-cradle": 4,
  "ball-pulse": 3,
  "ball-pulse-rise": 5,
  "ball-pulse-sync": 3,
  "ball-rotate": 1,
  "ball-running-dots": 5,
  "ball-scale": 1,
  "ball-scale-multiple": 3,
  "ball-scale-pulse": 2,
  "ball-scale-ripple": 1,
  "ball-scale-ripple-multiple": 3,
  "ball-spin": 8,
  "ball-spin-clockwise": 8,
  "ball-spin-clockwise-fade": 8,
  "ball-spin-clockwise-fade-rotating": 8,
  "ball-spin-fade": 8,
  "ball-spin-fade-rotating": 8,
  "ball-spin-rotate": 2,
  "ball-square-clockwise-spin": 8,
  "ball-square-spin": 8,
  "ball-triangle-path": 3,
  "ball-zig-zag": 2,
  "ball-zig-zag-deflect": 2,
  cog: 1,
  "cube-transition": 2,
  fire: 3,
  "line-scale": 5,
  "line-scale-party": 5,
  "line-scale-pulse-out": 5,
  "line-scale-pulse-out-rapid": 5,
  "line-spin-clockwise-fade": 8,
  "line-spin-clockwise-fade-rotating": 8,
  "line-spin-fade": 8,
  "line-spin-fade-rotating": 8,
  pacman: 6,
  "square-jelly-box": 2,
  "square-loader": 1,
  "square-spin": 1,
  timer: 1,
  "triangle-skew-spin": 1
};
var DEFAULTS = {
  BD_COLOR: "rgba(51,51,51,0.8)",
  SPINNER_COLOR: "#fff",
  Z_INDEX: 99999
};
var PRIMARY_SPINNER = "primary";
var NgxSpinner = class _NgxSpinner {
  constructor(init) {
    Object.assign(this, init);
  }
  static create(init) {
    if (!init?.template && !init?.type) {
      console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`);
    }
    return new _NgxSpinner(init);
  }
};
var _NgxSpinnerService = class _NgxSpinnerService {
  /**
   * Creates an instance of NgxSpinnerService.
   * @memberof NgxSpinnerService
   */
  constructor() {
    this.spinnerObservable = new BehaviorSubject(null);
  }
  /**
   * Get subscription of desired spinner
   * @memberof NgxSpinnerService
   **/
  getSpinner(name) {
    return this.spinnerObservable.asObservable().pipe(filter((x) => x && x.name === name));
  }
  /**
   * To show spinner
   *
   * @memberof NgxSpinnerService
   */
  show(name = PRIMARY_SPINNER, spinner) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (spinner && Object.keys(spinner).length) {
          spinner["name"] = name;
          this.spinnerObservable.next(new NgxSpinner(__spreadProps(__spreadValues({}, spinner), {
            show: true
          })));
          resolve(true);
        } else {
          this.spinnerObservable.next(new NgxSpinner({
            name,
            show: true
          }));
          resolve(true);
        }
      }, 10);
    });
  }
  /**
   * To hide spinner
   *
   * @memberof NgxSpinnerService
   */
  hide(name = PRIMARY_SPINNER, debounce = 10) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        this.spinnerObservable.next(new NgxSpinner({
          name,
          show: false
        }));
        resolve(true);
      }, debounce);
    });
  }
};
_NgxSpinnerService.ɵfac = function NgxSpinnerService_Factory(t) {
  return new (t || _NgxSpinnerService)();
};
_NgxSpinnerService.ɵprov = ɵɵdefineInjectable({
  token: _NgxSpinnerService,
  factory: _NgxSpinnerService.ɵfac,
  providedIn: "root"
});
var NgxSpinnerService = _NgxSpinnerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var NGX_SPINNER_CONFIG = new InjectionToken("NGX_SPINNER_CONFIG");
var _SafeHtmlPipe = class _SafeHtmlPipe {
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
  }
  transform(v) {
    if (v) {
      return this._sanitizer.bypassSecurityTrustHtml(v);
    }
  }
};
_SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
  return new (t || _SafeHtmlPipe)(ɵɵdirectiveInject(DomSanitizer, 16));
};
_SafeHtmlPipe.ɵpipe = ɵɵdefinePipe({
  name: "safeHtml",
  type: _SafeHtmlPipe,
  pure: true
});
var SafeHtmlPipe = _SafeHtmlPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "safeHtml"
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }];
  }, null);
})();
var _NgxSpinnerComponent = class _NgxSpinnerComponent {
  // TODO: https://github.com/Napster2210/ngx-spinner/issues/259
  // @HostListener("document:keydown", ["$event"])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   if (this.spinnerDOM && this.spinnerDOM.nativeElement) {
  //     if (
  //       this.fullScreen ||
  //       (!this.fullScreen && this.isSpinnerZone(event.target))
  //     ) {
  //       event.returnValue = false;
  //       event.preventDefault();
  //     }
  //   }
  // }
  /**
   * Creates an instance of NgxSpinnerComponent.
   *
   * @memberof NgxSpinnerComponent
   */
  constructor(spinnerService, changeDetector, elementRef, globalConfig) {
    this.spinnerService = spinnerService;
    this.changeDetector = changeDetector;
    this.elementRef = elementRef;
    this.globalConfig = globalConfig;
    this.disableAnimation = false;
    this.spinner = new NgxSpinner();
    this.ngUnsubscribe = new Subject();
    this.setDefaultOptions = () => {
      const {
        type
      } = this.globalConfig ?? {};
      this.spinner = NgxSpinner.create({
        name: this.name,
        bdColor: this.bdColor,
        size: this.size,
        color: this.color,
        type: this.type ?? type,
        fullScreen: this.fullScreen,
        divArray: this.divArray,
        divCount: this.divCount,
        show: this.show,
        zIndex: this.zIndex,
        template: this.template,
        showSpinner: this.showSpinner
      });
    };
    this.bdColor = DEFAULTS.BD_COLOR;
    this.zIndex = DEFAULTS.Z_INDEX;
    this.color = DEFAULTS.SPINNER_COLOR;
    this.size = "large";
    this.fullScreen = true;
    this.name = PRIMARY_SPINNER;
    this.template = null;
    this.showSpinner = false;
    this.divArray = [];
    this.divCount = 0;
    this.show = false;
  }
  initObservable() {
    this.spinnerService.getSpinner(this.name).pipe(takeUntil(this.ngUnsubscribe)).subscribe((spinner) => {
      this.setDefaultOptions();
      Object.assign(this.spinner, spinner);
      if (spinner.show) {
        this.onInputChange();
      }
      this.changeDetector.detectChanges();
    });
  }
  /**
   * Initialization method
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnInit() {
    this.setDefaultOptions();
    this.initObservable();
  }
  /**
   * To check event triggers inside the Spinner Zone
   *
   * @param {*} element
   * @returns {boolean}
   * @memberof NgxSpinnerComponent
   */
  isSpinnerZone(element) {
    if (element === this.elementRef.nativeElement.parentElement) {
      return true;
    }
    return element.parentNode && this.isSpinnerZone(element.parentNode);
  }
  /**
   * On changes event for input variables
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnChanges(changes) {
    for (const propName in changes) {
      if (propName) {
        const changedProp = changes[propName];
        if (changedProp.isFirstChange()) {
          return;
        } else if (typeof changedProp.currentValue !== "undefined" && changedProp.currentValue !== changedProp.previousValue) {
          if (changedProp.currentValue !== "") {
            this.spinner[propName] = changedProp.currentValue;
            if (propName === "showSpinner") {
              if (changedProp.currentValue) {
                this.spinnerService.show(this.spinner.name, this.spinner);
              } else {
                this.spinnerService.hide(this.spinner.name);
              }
            }
            if (propName === "name") {
              this.initObservable();
            }
          }
        }
      }
    }
  }
  /**
   * To get class for spinner
   *
   * @memberof NgxSpinnerComponent
   */
  getClass(type, size) {
    this.spinner.divCount = LOADERS[type];
    this.spinner.divArray = Array(this.spinner.divCount).fill(0).map((_, i) => i);
    let sizeClass = "";
    switch (size.toLowerCase()) {
      case "small":
        sizeClass = "la-sm";
        break;
      case "medium":
        sizeClass = "la-2x";
        break;
      case "large":
        sizeClass = "la-3x";
        break;
      default:
        break;
    }
    return "la-" + type + " " + sizeClass;
  }
  /**
   * Check if input variables have changed
   *
   * @memberof NgxSpinnerComponent
   */
  onInputChange() {
    this.spinner.class = this.getClass(this.spinner.type, this.spinner.size);
  }
  /**
   * Component destroy event
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
};
_NgxSpinnerComponent.ɵfac = function NgxSpinnerComponent_Factory(t) {
  return new (t || _NgxSpinnerComponent)(ɵɵdirectiveInject(NgxSpinnerService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NGX_SPINNER_CONFIG, 8));
};
_NgxSpinnerComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxSpinnerComponent,
  selectors: [["ngx-spinner"]],
  viewQuery: function NgxSpinnerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.spinnerDOM = _t.first);
    }
  },
  inputs: {
    bdColor: "bdColor",
    size: "size",
    color: "color",
    type: "type",
    fullScreen: "fullScreen",
    name: "name",
    zIndex: "zIndex",
    template: "template",
    showSpinner: "showSpinner",
    disableAnimation: "disableAnimation"
  },
  features: [ɵɵNgOnChangesFeature],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 1,
  consts: [["class", "ngx-spinner-overlay", 3, "background-color", "z-index", "position", 4, "ngIf"], [1, "ngx-spinner-overlay"], ["overlay", ""], [3, "class", "color", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [1, "loading-text"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]],
  template: function NgxSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NgxSpinnerComponent_div_0_Template, 6, 12, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.spinner.show);
    }
  },
  dependencies: [NgForOf, NgIf, SafeHtmlPipe],
  styles: [".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],
  data: {
    animation: [trigger("fadeIn", [state("in", style({
      opacity: 1
    })), transition(":enter", [style({
      opacity: 0
    }), animate(300)]), transition(":leave", animate(200, style({
      opacity: 0
    })))])]
  },
  changeDetection: 0
});
var NgxSpinnerComponent = _NgxSpinnerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerComponent, [{
    type: Component,
    args: [{
      selector: "ngx-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("fadeIn", [state("in", style({
        opacity: 1
      })), transition(":enter", [style({
        opacity: 0
      }), animate(300)]), transition(":leave", animate(200, style({
        opacity: 0
      })))])],
      template: `<div
  [@.disabled]="disableAnimation"
  [@fadeIn]="'in'"
  *ngIf="spinner.show"
  class="ngx-spinner-overlay"
  [style.background-color]="spinner.bdColor"
  [style.z-index]="spinner.zIndex"
  [style.position]="spinner.fullScreen ? 'fixed' : 'absolute'"
  #overlay
>
  <div *ngIf="!template" [class]="spinner.class" [style.color]="spinner.color">
    <div *ngFor="let index of spinner.divArray"></div>
  </div>
  <div *ngIf="template" [innerHTML]="template | safeHtml"></div>
  <div class="loading-text" [style.z-index]="spinner.zIndex">
    <ng-content></ng-content>
  </div>
</div>
`,
      styles: [".ngx-spinner-overlay{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}\n"]
    }]
  }], function() {
    return [{
      type: NgxSpinnerService
    }, {
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [NGX_SPINNER_CONFIG]
      }]
    }];
  }, {
    bdColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    fullScreen: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    zIndex: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    showSpinner: [{
      type: Input
    }],
    disableAnimation: [{
      type: Input
    }],
    spinnerDOM: [{
      type: ViewChild,
      args: ["overlay"]
    }]
  });
})();
var _NgxSpinnerModule = class _NgxSpinnerModule {
  static forRoot(config) {
    return {
      ngModule: _NgxSpinnerModule,
      providers: [{
        provide: NGX_SPINNER_CONFIG,
        useValue: config
      }]
    };
  }
};
_NgxSpinnerModule.ɵfac = function NgxSpinnerModule_Factory(t) {
  return new (t || _NgxSpinnerModule)();
};
_NgxSpinnerModule.ɵmod = ɵɵdefineNgModule({
  type: _NgxSpinnerModule,
  declarations: [NgxSpinnerComponent, SafeHtmlPipe],
  imports: [CommonModule],
  exports: [NgxSpinnerComponent]
});
_NgxSpinnerModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var NgxSpinnerModule = _NgxSpinnerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [NgxSpinnerComponent, SafeHtmlPipe],
      exports: [NgxSpinnerComponent]
    }]
  }], null, null);
})();
export {
  DEFAULTS,
  LOADERS,
  NgxSpinner,
  NgxSpinnerComponent,
  NgxSpinnerModule,
  NgxSpinnerService,
  PRIMARY_SPINNER
};
//# sourceMappingURL=ngx-spinner.js.map
