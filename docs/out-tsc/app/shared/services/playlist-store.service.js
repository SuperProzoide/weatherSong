var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var PlaylistStoreService = /** @class */ (function () {
    function PlaylistStoreService() {
        this.ngxYTPlayer = 'ngx_yt_player';
        this.playlists_template = {
            'playlists': []
        };
    }
    PlaylistStoreService.prototype.init = function () {
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(this.playlists_template));
    };
    PlaylistStoreService.prototype.retrieveStorage = function () {
        var storedPlaylist = this.parse();
        if (!storedPlaylist) {
            this.init();
            storedPlaylist = this.parse();
        }
        return storedPlaylist;
    };
    PlaylistStoreService.prototype.addToPlaylist = function (video) {
        var store = this.parse();
        store.playlists.push(video);
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(store));
    };
    PlaylistStoreService.prototype.removeFromPlaylist = function (video) {
        var store = this.parse();
        store.playlists = store.playlists.filter(function (item) { return item.id !== video.id; });
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(store));
    };
    PlaylistStoreService.prototype.parse = function () {
        return JSON.parse(localStorage.getItem(this.ngxYTPlayer));
    };
    PlaylistStoreService.prototype.clearPlaylist = function () {
        this.init();
    };
    PlaylistStoreService.prototype.importPlaylist = function (videos) {
        var store = this.parse();
        store.playlists = videos;
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(store));
    };
    PlaylistStoreService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], PlaylistStoreService);
    return PlaylistStoreService;
}());
export { PlaylistStoreService };
//# sourceMappingURL=C:/Users/Altran/net-projects/ngx-youtube-player-master/src/app/shared/services/playlist-store.service.js.map