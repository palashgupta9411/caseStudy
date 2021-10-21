import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { Timer2Component } from './timer/timer.component';

const routes: Routes = [
  {path : '' , component : Timer2Component}
 ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) 
  ]
})
export class TimerRoutingModule { }
