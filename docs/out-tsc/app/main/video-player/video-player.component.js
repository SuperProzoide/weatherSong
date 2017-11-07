var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { YoutubePlayerService } from '../../shared/services/youtube-player.service';
import { NotificationService } from '../../shared/services/notification.service';
var VideoPlayerComponent = /** @class */ (function () {
    function VideoPlayerComponent(youtubePlayer, notificationService) {
        var _this = this;
        this.youtubePlayer = youtubePlayer;
        this.notificationService = notificationService;
        this.minPlayer = true;
        this.superMinPlayer = false;
        this.playingEvent = 'pause';
        this.shuffle = false;
        this.repeat = false;
        this.fullscreenActive = false;
        this.currentVideoText = 'None';
        this.repeatActive = new EventEmitter();
        this.shuffleActive = new EventEmitter();
        this.nextVideoEvent = new EventEmitter();
        this.prevVideoEvent = new EventEmitter();
        this.playFirstInPlaylist = new EventEmitter();
        this.clearPlaylist = new EventEmitter();
        this.exportPlaylist = new EventEmitter();
        this.importPlaylist = new EventEmitter();
        this.closePlaylist = new EventEmitter();
        this.youtubePlayer.playPauseEvent.subscribe(function (event) { return _this.playingEvent = event; });
        this.youtubePlayer.currentVideoText.subscribe(function (event) { return _this.currentVideoText = event || 'None'; });
    }
    VideoPlayerComponent.prototype.ngAfterContentInit = function () {
        var doc = window.document;
        var playerApi = doc.createElement('script');
        playerApi.type = 'text/javascript';
        playerApi.src = 'https://www.youtube.com/iframe_api';
        doc.body.appendChild(playerApi);
        this.youtubePlayer.createPlayer();
        this.toggleFullscreen();
    };
    VideoPlayerComponent.prototype.toggleFullscreen = function () {
        this.minPlayer = false;
        this.superMinPlayer = false;
        this.fullscreenActive = !this.fullscreenActive;
        var width = this.fullscreenActive ? window.innerWidth * 0.8 : 440;
        var height = this.fullscreenActive ? window.innerHeight - 120 : 250;
        this.youtubePlayer.resizePlayer(width, height);
    };
    VideoPlayerComponent.prototype.playPause = function (event) {
        this.playingEvent = event;
        if (!this.youtubePlayer.getCurrentVideo()) {
            this.playFirstInPlaylist.emit();
            return;
        }
        event === 'pause' ? this.youtubePlayer.pausePlayingVideo() : this.youtubePlayer.playPausedVideo();
    };
    VideoPlayerComponent.prototype.nextVideo = function () {
        this.nextVideoEvent.emit();
    };
    VideoPlayerComponent.prototype.prevVideo = function () {
        this.prevVideoEvent.emit();
    };
    VideoPlayerComponent.prototype.togglePlayer = function () {
        this.minPlayer = !this.minPlayer;
        this.superMinPlayer = false;
    };
    VideoPlayerComponent.prototype.minimizePlayer = function () {
        this.superMinPlayer = !this.superMinPlayer;
    };
    VideoPlayerComponent.prototype.toggleRepeat = function () {
        this.repeat = !this.repeat;
        this.shuffle = false;
        this.repeatActive.emit(this.repeat);
    };
    VideoPlayerComponent.prototype.toggleShuffle = function () {
        this.shuffle = !this.shuffle;
        this.repeat = false;
        this.shuffleActive.emit(this.shuffle);
    };
    VideoPlayerComponent.prototype.openClosedPlaylist = function () {
        this.closePlaylist.emit();
    };
    VideoPlayerComponent.prototype.clearPlaylistAction = function () {
        this.clearPlaylist.emit();
    };
    VideoPlayerComponent.prototype.exportPlaylistAction = function () {
        this.exportPlaylist.emit();
    };
    VideoPlayerComponent.prototype.importPlaylistAction = function () {
        var import_button = document.getElementById('import_button');
        import_button.click();
    };
    VideoPlayerComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        if (file.name.split('.').pop() !== 'json') {
            this.notificationService.showNotification('File not supported.');
            return;
        }
        var reader = new FileReader();
        var me = this;
        reader.readAsText(file);
        reader.onload = function (ev) {
            var list;
            try {
                list = JSON.parse(ev.target['result']);
            }
            catch (exc) {
                list = null;
            }
            if (!list || list.length < 1) {
                me.notificationService.showNotification('Playlist not valid.');
                return;
            }
            me.importPlaylist.emit(list);
            me.notificationService.showNotification('Playlist imported.');
            document.getElementById('import_button')['value'] = '';
        };
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "repeatActive", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "shuffleActive", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "nextVideoEvent", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "prevVideoEvent", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "playFirstInPlaylist", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "clearPlaylist", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "exportPlaylist", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "importPlaylist", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "closePlaylist", void 0);
    VideoPlayerComponent = __decorate([
        Component({
            selector: 'video-player',
            templateUrl: 'video-player.component.html',
            styleUrls: ['video-player.component.css']
        }),
        __metadata("design:paramtypes", [YoutubePlayerService,
            NotificationService])
    ], VideoPlayerComponent);
    return VideoPlayerComponent;
}());
export { VideoPlayerComponent };
//# sourceMappingURL=C:/Users/Altran/net-projects/weatherSong/src/app/main/video-player/video-player.component.js.map