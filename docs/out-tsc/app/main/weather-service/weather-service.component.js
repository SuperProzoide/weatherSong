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
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
var WeatherServiceComponent = /** @class */ (function () {
    function WeatherServiceComponent(_http) {
        this._http = _http;
    }
    WeatherServiceComponent.prototype.searchWeatherData = function (lat, lon) {
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=2f733ac74988538b834072348b43c61c&units=metric')
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            console.error(error);
            return Observable.throw(error.json());
        });
    };
    WeatherServiceComponent = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], WeatherServiceComponent);
    return WeatherServiceComponent;
}());
export { WeatherServiceComponent };
//# sourceMappingURL=C:/Users/Altran/net-projects/weatherSong/src/app/main/weather-service/weather-service.component.js.map