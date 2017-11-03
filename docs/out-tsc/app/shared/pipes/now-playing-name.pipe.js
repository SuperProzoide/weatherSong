var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var NowPlayingNamePipe = /** @class */ (function () {
    function NowPlayingNamePipe() {
    }
    NowPlayingNamePipe.prototype.transform = function (value, args) {
        var dots = ' ...';
        if (value.length > 56) {
            value = value.substring(0, 51) + dots;
        }
        return value;
    };
    NowPlayingNamePipe = __decorate([
        Pipe({
            name: 'nowPlayingName'
        })
    ], NowPlayingNamePipe);
    return NowPlayingNamePipe;
}());
export { NowPlayingNamePipe };
//# sourceMappingURL=C:/Users/Altran/net-projects/ngx-youtube-player-master/src/app/shared/pipes/now-playing-name.pipe.js.map