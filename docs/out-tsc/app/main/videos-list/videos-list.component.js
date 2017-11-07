var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { YoutubePlayerService } from '../../shared/services/youtube-player.service';
import { PlaylistStoreService } from '../../shared/services/playlist-store.service';
var VideosListComponent = /** @class */ (function () {
    function VideosListComponent(youtubePlayer, playlistService) {
        this.youtubePlayer = youtubePlayer;
        this.playlistService = playlistService;
        this.videoPlaylist = new EventEmitter();
    }
    VideosListComponent.prototype.play = function (video) {
        this.youtubePlayer.playVideo(video.id, video.snippet.title);
        this.addToPlaylist(video);
    };
    VideosListComponent.prototype.addToPlaylist = function (video) {
        this.videoPlaylist.emit(video);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], VideosListComponent.prototype, "videoList", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], VideosListComponent.prototype, "loadingInProgress", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], VideosListComponent.prototype, "videoPlaylist", void 0);
    VideosListComponent = __decorate([
        Component({
            selector: 'videos-list',
            templateUrl: 'videos-list.component.html',
            styleUrls: ['videos-list.component.css']
        }),
        __metadata("design:paramtypes", [YoutubePlayerService,
            PlaylistStoreService])
    ], VideosListComponent);
    return VideosListComponent;
}());
export { VideosListComponent };
//# sourceMappingURL=C:/Users/Altran/net-projects/weatherSong/src/app/main/videos-list/videos-list.component.js.map