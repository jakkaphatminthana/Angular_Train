import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Project2Component } from './module/project2/project2.component';
import { Project3Component } from './module/project3/project3.component';
import { P4MaxMinMeterComponent } from './module/p4-max-min-meter/p4-max-min-meter.component';
import { P5SqaureFlexComponent } from './module/p5-sqaure-flex/p5-sqaure-flex.component';
import { P8ArrayComponent } from './module/p8-array/p8-array.component';
import { HttpClientModule } from '@angular/common/http';
import { P9TestRequestModule } from './module/p9-test-request/p9-test-request.module';

import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    Project2Component,
    Project3Component,
    P4MaxMinMeterComponent,
    P5SqaureFlexComponent,
    P8ArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    P9TestRequestModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
