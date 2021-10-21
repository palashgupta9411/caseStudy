import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Timer2Component } from './timer/timer.component';
import { TimerRoutingModule } from './timer2-routing.module';
import { CountDownComponent } from './timer/count-down/count-down.component';
import { LoggingComponent } from './timer/logging/logging.component';
import { TimeLimitComponent } from './timer/time-limit/time-limit.component';
import { CounterComponent } from './timer/counter/counter.component';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Timer2Component,
    CountDownComponent,
    LoggingComponent,
    TimeLimitComponent,
    CounterComponent,
    NumbersOnlyDirective
  ],
  imports: [
    CommonModule,
    TimerRoutingModule,
    FormsModule
  ]
})
export class Timer2Module { }
