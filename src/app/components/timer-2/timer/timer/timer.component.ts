import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class Timer2Component implements OnInit {

  constructor(
    public datashare : TimerService
  ) { }
  timeLimit = 0 ;
  startCount = 0 ; 
  pausedCount = 0 ; 
  logArr = [] ;
  public timerSub : any ;
  public pausedSub :any ;
  ngOnInit(): void {
    //register subscribtions 
    this.timerSub = this.datashare.dataShareSubject.subscribe((data:any)=>{
      this.setTimeLimit(data)
    })
  }
  
  // function to set data on start pause 
  setTimeLimit(event:any){
    if(event.action=='started'){
      this.timeLimit = event.time ;
    }
    if(event.action == 'reset'){
      this.timeLimit = 0 ;
    }
    this.startCount = event.startcount ;
    this.pausedCount = event.pausedcount ;
    this.logArr = event.log ;
  }

  ngOnDestroy(){
    this.timerSub.unsubscribe(); 
  }
}
