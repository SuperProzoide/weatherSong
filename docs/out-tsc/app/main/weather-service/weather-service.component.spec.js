import { async, TestBed } from '@angular/core/testing';
import { WeatherServiceComponent } from './weather-service.component';
describe('WeatherServiceComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [WeatherServiceComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(WeatherServiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Altran/net-projects/weatherSong/src/app/main/weather-service/weather-service.component.spec.js.map