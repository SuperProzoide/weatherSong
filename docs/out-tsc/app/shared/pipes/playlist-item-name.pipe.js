var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var PlaylistItemNamePipe = /** @class */ (function () {
    function PlaylistItemNamePipe() {
    }
    PlaylistItemNamePipe.prototype.transform = function (value, args) {
        var dots = '...';
        if (value.length > 65) {
            value = value.substring(0, 62) + dots;
        }
        return value;
    };
    PlaylistItemNamePipe = __decorate([
        Pipe({
            name: 'playlistItemName'
        })
    ], PlaylistItemNamePipe);
    return PlaylistItemNamePipe;
}());
export { PlaylistItemNamePipe };
//# sourceMappingURL=C:/Users/Altran/net-projects/weatherSong/src/app/shared/pipes/playlist-item-name.pipe.js.map