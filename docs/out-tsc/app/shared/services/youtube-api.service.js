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
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { NotificationService } from './notification.service';
import { YOUTUBE_API_KEY } from '../constants';
var YoutubeApiService = /** @class */ (function () {
    function YoutubeApiService(http, notificationService) {
        this.http = http;
        this.notificationService = notificationService;
        this.base_url = 'https://www.googleapis.com/youtube/v3/';
        this.max_results = 50;
    }
    YoutubeApiService.prototype.searchVideos = function (query) {
        var _this = this;
        var url = this.base_url + 'search?q=' + query + '&maxResults=' + this.max_results +
            '&type=video&part=snippet,id&key=' + YOUTUBE_API_KEY + '&videoEmbeddable=true';
        return this.http.get(url)
            .map(function (response) {
            var jsonRes = response.json();
            var res = jsonRes['items'];
            _this.lastQuery = query;
            _this.nextToken = jsonRes['nextPageToken'] ? jsonRes['nextPageToken'] : undefined;
            var ids = [];
            res.forEach(function (item) {
                ids.push(item.id.videoId);
            });
            return _this.getVideos(ids);
        })
            .toPromise()
            .catch(this.handleError);
    };
    YoutubeApiService.prototype.searchNext = function () {
        var _this = this;
        var url = this.base_url + 'search?q=' + this.lastQuery + '&pageToken=' + this.nextToken +
            '&maxResults=' + this.max_results + '&type=video&part=snippet,id&key=' + YOUTUBE_API_KEY + '&videoEmbeddable=true';
        return this.http.get(url)
            .map(function (response) {
            var jsonRes = response.json();
            var res = jsonRes['items'];
            _this.nextToken = jsonRes['nextPageToken'] ? jsonRes['nextPageToken'] : undefined;
            var ids = [];
            res.forEach(function (item) {
                ids.push(item.id.videoId);
            });
            return _this.getVideos(ids);
        })
            .toPromise()
            .catch(this.handleError);
    };
    YoutubeApiService.prototype.getVideos = function (ids) {
        var url = this.base_url + 'videos?id=' + ids.join(',') + '&maxResults=' + this.max_results +
            '&type=video&part=snippet,contentDetails,statistics&key=' + YOUTUBE_API_KEY;
        return this.http.get(url)
            .map(function (results) {
            return results.json()['items'];
        })
            .toPromise()
            .catch(this.handleError);
    };
    YoutubeApiService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        this.notificationService.showNotification(errMsg);
        return Promise.reject(errMsg);
    };
    YoutubeApiService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http,
            NotificationService])
    ], YoutubeApiService);
    return YoutubeApiService;
}());
export { YoutubeApiService };
//# sourceMappingURL=C:/Users/Altran/net-projects/weatherSong/src/app/shared/services/youtube-api.service.js.map