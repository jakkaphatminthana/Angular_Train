import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project1RoutingModule } from './project1-routing.module';
import { Project1Component } from './project1.component';


@NgModule({
  declarations: [
    Project1Component
  ],
  imports: [
    CommonModule,
    Project1RoutingModule
  ]
})
export class Project1Module { }
