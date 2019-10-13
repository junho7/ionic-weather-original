import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {WeatherApiPage} from '../pages/weather-api/weather-api';
import {WeatherPage} from '../pages/weather/weather';
import {ForecastPage} from '../pages/forecast/forecast';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    WeatherApiPage,
    WeatherPage,
    ForecastPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WeatherApiPage,
    WeatherPage,
    ForecastPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
