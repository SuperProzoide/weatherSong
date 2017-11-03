var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
var LazyScrollDirective = /** @class */ (function () {
    function LazyScrollDirective(element) {
        this.element = element;
        this.OnScrollMethod = new EventEmitter();
        this._element = this.element.nativeElement;
        if (!this.scrollTrigger) {
            this.scrollTrigger = 1;
        }
    }
    LazyScrollDirective.prototype.onScroll = function () {
        this._count++;
        if (this._element.scrollTop + this._element.clientHeight >= this._element.scrollHeight) {
            this.OnScrollMethod.emit(null);
        }
        else {
            if (this._count % this.scrollTrigger === 0) {
                this.OnScrollMethod.emit(null);
            }
        }
    };
    __decorate([
        Input('ScrollDistance'),
        __metadata("design:type", Number)
    ], LazyScrollDirective.prototype, "scrollTrigger", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], LazyScrollDirective.prototype, "OnScrollMethod", void 0);
    LazyScrollDirective = __decorate([
        Directive({
            selector: '[LazyScroll]',
            host: {
                '(scroll)': 'onScroll($event)'
            }
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], LazyScrollDirective);
    return LazyScrollDirective;
}());
export { LazyScrollDirective };
//# sourceMappingURL=C:/Users/Altran/net-projects/ngx-youtube-player-master/src/app/shared/directives/lazy-scroll/lazy-scroll.directive.js.map