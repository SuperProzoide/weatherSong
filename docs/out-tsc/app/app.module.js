var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { VideosListComponent } from './main/videos-list/videos-list.component';
import { VideosPlaylistComponent } from './main/videos-playlist/videos-playlist.component';
import { VideosSearchComponent } from './main/videos-search/videos-search.component';
import { VideoPlayerComponent } from './main/video-player/video-player.component';
// Services
import { YoutubeApiService } from './shared/services/youtube-api.service';
import { YoutubePlayerService } from './shared/services/youtube-player.service';
import { PlaylistStoreService } from './shared/services/playlist-store.service';
import { NotificationService } from './shared/services/notification.service';
// Pipes
import { VideoDurationPipe } from './shared/pipes/video-duration.pipe';
import { VideoLikesPipe } from './shared/pipes/video-likes.pipe';
import { VideoViewsPipe } from './shared/pipes/video-views.pipe';
import { PlaylistItemNamePipe } from './shared/pipes/playlist-item-name.pipe';
import { NowPlayingNamePipe } from './shared/pipes/now-playing-name.pipe';
import { LazyScrollDirective } from './shared/directives/lazy-scroll/lazy-scroll.directive';
import { WeatherServiceComponent } from './main/weather-service/weather-service.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                HttpModule,
                ReactiveFormsModule
            ],
            declarations: [
                AppComponent,
                MainComponent,
                VideosListComponent,
                VideosSearchComponent,
                VideoPlayerComponent,
                VideosPlaylistComponent,
                VideoDurationPipe,
                VideoLikesPipe,
                VideoViewsPipe,
                PlaylistItemNamePipe,
                NowPlayingNamePipe,
                LazyScrollDirective,
            ],
            bootstrap: [
                AppComponent
            ],
            providers: [
                YoutubeApiService,
                YoutubePlayerService,
                PlaylistStoreService,
                WeatherServiceComponent,
                NotificationService
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=C:/Users/Altran/net-projects/weatherSong/src/app/app.module.js.map