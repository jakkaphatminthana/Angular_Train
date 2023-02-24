import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Project2Component } from './module/project2/project2.component';
import { Project3Component } from './module/project3/project3.component';
import { P4MaxMinMeterComponent } from './module/p4-max-min-meter/p4-max-min-meter.component';
import { P5SqaureFlexComponent } from './module/p5-sqaure-flex/p5-sqaure-flex.component';

@NgModule({
  declarations: [
    AppComponent,
    Project2Component,
    Project3Component,
    P4MaxMinMeterComponent,
    P5SqaureFlexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
