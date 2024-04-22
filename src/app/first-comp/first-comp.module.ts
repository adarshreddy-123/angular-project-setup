import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstCompRoutingModule } from './first-comp-routing.module';
import { SecondCompComponent } from './second-comp/second-comp.component';


@NgModule({
  declarations: [
    SecondCompComponent
  ],
  imports: [
    CommonModule,
    FirstCompRoutingModule
  ]
})
export class FirstCompModule { }
