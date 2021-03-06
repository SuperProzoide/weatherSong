var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var VideoViewsPipe = /** @class */ (function () {
    function VideoViewsPipe() {
    }
    VideoViewsPipe.prototype.transform = function (value, args) {
        return parseInt(value, 10).toLocaleString('en');
    };
    VideoViewsPipe = __decorate([
        Pipe({
            name: 'videoViews'
        })
    ], VideoViewsPipe);
    return VideoViewsPipe;
}());
export { VideoViewsPipe };
//# sourceMappingURL=C:/Users/Altran/net-projects/weatherSong/src/app/shared/pipes/video-views.pipe.js.map