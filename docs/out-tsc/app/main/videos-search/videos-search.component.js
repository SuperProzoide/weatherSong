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
import { FormBuilder, Validators } from '@angular/forms';
import { YoutubeApiService } from '../../shared/services/youtube-api.service';
import { YoutubePlayerService } from '../../shared/services/youtube-player.service';
import { NotificationService } from '../../shared/services/notification.service';
var VideosSearchComponent = /** @class */ (function () {
    function VideosSearchComponent(fb, youtubeService, youtubePlayer, notificationService) {
        var _this = this;
        this.fb = fb;
        this.youtubeService = youtubeService;
        this.youtubePlayer = youtubePlayer;
        this.notificationService = notificationService;
        this.videosUpdated = new EventEmitter();
        this.searchForm = this.fb.group({
            query: ['', Validators.required]
        });
        this.youtubeService.searchVideos('riders on the storm')
            .then(function (data) {
            _this.videosUpdated.emit(data);
        });
    }
    VideosSearchComponent.prototype.doSearch = function (event) {
        var _this = this;
        if (this.loadingInProgress || (this.searchForm.value.query.trim().length === 0) ||
            (this.last_search && this.last_search === this.searchForm.value.query)) {
            return;
        }
        this.videosUpdated.emit([]);
        this.last_search = this.searchForm.value.query;
        this.youtubeService.searchVideos(this.last_search)
            .then(function (data) {
            if (data.length < 1) {
                _this.notificationService.showNotification('No matches found.');
            }
            _this.videosUpdated.emit(data);
        });
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], VideosSearchComponent.prototype, "videosUpdated", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], VideosSearchComponent.prototype, "loadingInProgress", void 0);
    VideosSearchComponent = __decorate([
        Component({
            selector: 'videos-search',
            templateUrl: 'videos-search.component.html',
            styleUrls: ['videos-search.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            YoutubeApiService,
            YoutubePlayerService,
            NotificationService])
    ], VideosSearchComponent);
    return VideosSearchComponent;
}());
export { VideosSearchComponent };
//# sourceMappingURL=C:/Users/Altran/net-projects/ngx-youtube-player-master/src/app/main/videos-search/videos-search.component.js.map