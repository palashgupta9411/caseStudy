import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }
  timeLimit = 0 ;
  pausedArray = []  ;
  startCount = 0 ; 
  pausedCount = 0 ; 
  logArr = [] ;
  ngOnInit(): void {
  }
  
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
  setPauseArray(event:any){
    this.pausedArray = event;
  }
}
