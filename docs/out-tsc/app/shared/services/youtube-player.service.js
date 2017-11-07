var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Output, EventEmitter } from '@angular/core';
import { NotificationService } from './notification.service';
var _window = window;
var YoutubePlayerService = /** @class */ (function () {
    function YoutubePlayerService(notificationService) {
        this.notificationService = notificationService;
        this.videoChangeEvent = new EventEmitter(true);
        this.playPauseEvent = new EventEmitter(true);
        this.currentVideoText = new EventEmitter(true);
    }
    YoutubePlayerService.prototype.createPlayer = function () {
        var _this = this;
        var interval = setInterval(function () {
            if ((typeof _window.YT !== 'undefined') && _window.YT && _window.YT.Player) {
                _this.yt_player = new _window.YT.Player('yt-player', {
                    width: window.innerWidth * 0.8,
                    height: window.innerHeight - 120,
                    videoId: 'GutM23LLpP4',
                    playerVars: {
                        iv_load_policy: '3',
                        rel: '0'
                    },
                    events: {
                        onStateChange: function (ev) {
                            _this.onPlayerStateChange(ev);
                        }
                    }
                });
                clearInterval(interval);
            }
        }, 100);
    };
    YoutubePlayerService.prototype.onPlayerStateChange = function (event) {
        var state = event.data;
        switch (state) {
            case 0:
                this.videoChangeEvent.emit(true);
                this.playPauseEvent.emit('pause');
                break;
            case 1:
                this.playPauseEvent.emit('play');
                break;
            case 2:
                this.playPauseEvent.emit('pause');
                break;
        }
    };
    YoutubePlayerService.prototype.playVideo = function (videoId, videoText) {
        if (!this.yt_player) {
            this.notificationService.showNotification('Player not ready.');
            return;
        }
        this.yt_player.loadVideoById(videoId);
        this.currentVideoId = videoId;
        this.currentVideoText.emit(videoText);
    };
    YoutubePlayerService.prototype.pausePlayingVideo = function () {
        this.yt_player.pauseVideo();
    };
    YoutubePlayerService.prototype.playPausedVideo = function () {
        this.yt_player.playVideo();
    };
    YoutubePlayerService.prototype.getCurrentVideo = function () {
        return this.currentVideoId;
    };
    YoutubePlayerService.prototype.resizePlayer = function (width, height) {
        this.yt_player.setSize(width, height);
    };
    YoutubePlayerService.prototype.getShuffled = function (index, max) {
        if (max < 2) {
            return;
        }
        var i = Math.floor(Math.random() * max);
        return i !== index ? i : this.getShuffled(index, max);
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], YoutubePlayerService.prototype, "videoChangeEvent", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], YoutubePlayerService.prototype, "playPauseEvent", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], YoutubePlayerService.prototype, "currentVideoText", void 0);
    YoutubePlayerService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NotificationService])
    ], YoutubePlayerService);
    return YoutubePlayerService;
}());
export { YoutubePlayerService };
//# sourceMappingURL=C:/Users/Altran/net-projects/weatherSong/src/app/shared/services/youtube-player.service.js.map