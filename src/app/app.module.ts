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
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { P11PrimengTableComponent } from './module/p11-primeng-table/p11-primeng-table.component';
import { P12ShoppingModule } from './module/p12-shopping/p12-shopping.module';

@NgModule({
  declarations: [
    AppComponent,
    Project2Component,
    Project3Component,
    P4MaxMinMeterComponent,
    P5SqaureFlexComponent,
    P8ArrayComponent,
    P11PrimengTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    P9TestRequestModule,
    InputTextModule,
    TableModule,
    P12ShoppingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
