import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './shared/modules/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { WeatherWidgetMainComponent } from './shared/components/weather-widget-main/weather-widget-main.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
