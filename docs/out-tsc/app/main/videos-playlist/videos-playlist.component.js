var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { YoutubePlayerService } from '../../shared/services/youtube-player.service';
import { PlaylistStoreService } from '../../shared/services/playlist-store.service';
var VideosPlaylistComponent = /** @class */ (function () {
    function VideosPlaylistComponent(youtubePlayer, playlistService) {
        var _this = this;
        this.youtubePlayer = youtubePlayer;
        this.playlistService = playlistService;
        this.youtubePlayer.videoChangeEvent.subscribe(function (event) { return event ? _this.playNextVideo() : false; });
    }
    VideosPlaylistComponent.prototype.play = function (id) {
        var videoText = 'None';
        this.videoPlaylist.forEach(function (video, index) {
            if (video.id === id) {
                videoText = video.snippet.title;
            }
        });
        this.youtubePlayer.playVideo(id, videoText);
    };
    VideosPlaylistComponent.prototype.currentPlaying = function (id) {
        return this.youtubePlayer.getCurrentVideo() === id;
    };
    VideosPlaylistComponent.prototype.removeFromPlaylist = function (video) {
        this.videoPlaylist.splice(this.videoPlaylist.indexOf(video), 1);
        this.playlistService.removeFromPlaylist(video);
    };
    VideosPlaylistComponent.prototype.playNextVideo = function () {
        var current = this.youtubePlayer.getCurrentVideo();
        var inPlaylist;
        if (this.repeat) {
            this.play(current);
            return;
        }
        this.videoPlaylist.forEach(function (video, index) {
            if (video.id === current) {
                inPlaylist = index;
            }
        });
        if (inPlaylist !== undefined) {
            var topPos = document.getElementById(this.videoPlaylist[inPlaylist].id).offsetTop;
            var playlistEl = document.getElementById('playlist');
            if (this.shuffle) {
                var shuffled = this.videoPlaylist[this.youtubePlayer.getShuffled(inPlaylist, this.videoPlaylist.length)];
                this.youtubePlayer.playVideo(shuffled.id, shuffled.snippet.title);
                playlistEl.scrollTop = document.getElementById(shuffled).offsetTop - 100;
            }
            else {
                if (this.videoPlaylist.length - 1 === inPlaylist) {
                    this.youtubePlayer.playVideo(this.videoPlaylist[0].id, this.videoPlaylist[0].snippet.title);
                    playlistEl.scrollTop = 0;
                }
                else {
                    this.youtubePlayer.playVideo(this.videoPlaylist[inPlaylist + 1].id, this.videoPlaylist[inPlaylist + 1].snippet.title);
                    playlistEl.scrollTop = topPos - 100;
                }
            }
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], VideosPlaylistComponent.prototype, "playlistToggle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], VideosPlaylistComponent.prototype, "videoPlaylist", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], VideosPlaylistComponent.prototype, "playlistNames", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], VideosPlaylistComponent.prototype, "repeat", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], VideosPlaylistComponent.prototype, "shuffle", void 0);
    VideosPlaylistComponent = __decorate([
        Component({
            selector: 'videos-playlist',
            templateUrl: 'videos-playlist.component.html',
            styleUrls: ['videos-playlist.component.css']
        }),
        __metadata("design:paramtypes", [YoutubePlayerService,
            PlaylistStoreService])
    ], VideosPlaylistComponent);
    return VideosPlaylistComponent;
}());
export { VideosPlaylistComponent };
//# sourceMappingURL=C:/Users/Altran/net-projects/ngx-youtube-player-master/src/app/main/videos-playlist/videos-playlist.component.js.map