var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var VideoDurationPipe = /** @class */ (function () {
    function VideoDurationPipe() {
    }
    VideoDurationPipe.prototype.transform = function (value, args) {
        var time = value;
        if (!time) {
            return '...';
        }
        return ['PT', 'H', 'M', 'S'].reduce(function (prev, cur, i, arr) {
            var now = prev.rest.split(cur);
            if (cur !== 'PT' && cur !== 'H' && !prev.rest.match(cur)) {
                prev.new.push('00');
            }
            if (now.length === 1) {
                return prev;
            }
            prev.new.push(now[0]);
            return {
                rest: now[1].replace(cur, ''),
                new: prev.new
            };
        }, { rest: time, new: [] })
            .new.filter(function (_time) { return _time !== ''; })
            .map(function (_time) { return _time.length === 1 ? "0" + _time : _time; })
            .join(':');
    };
    VideoDurationPipe = __decorate([
        Pipe({
            name: 'videoDuration'
        })
    ], VideoDurationPipe);
    return VideoDurationPipe;
}());
export { VideoDurationPipe };
//# sourceMappingURL=C:/Users/Altran/net-projects/ngx-youtube-player-master/src/app/shared/pipes/video-duration.pipe.js.map