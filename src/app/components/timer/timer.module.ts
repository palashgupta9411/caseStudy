import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { TimerRoutingModule } from './timer-routing.module';
import { CountDownComponent } from './timer/count-down/count-down.component';
import { LoggingComponent } from './timer/logging/logging.component';
import { TimeLimitComponent } from './timer/time-limit/time-limit.component';
import { CounterComponent } from './timer/counter/counter.component';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TimerComponent,
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
export class TimerModule { }
