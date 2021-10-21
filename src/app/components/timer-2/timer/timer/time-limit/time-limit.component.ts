import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-time-limit',
  templateUrl: './time-limit.component.html',
  styleUrls: ['./time-limit.component.scss']
})
export class TimeLimitComponent implements OnInit {

  constructor(public dataShare : TimerService) { }
  timeLimit = '0' ;
  toStart = true ; 
  start = false ;
  pauseCount = 0 ;
  logArr :any = [] ;
  startCount = 0 ; 
  public pausedSub :any ;

  public pausedArray : Array<number> = [] ;
  ngOnInit(): void {
    this.pausedSub = this.dataShare.sharePausedArray.subscribe((data:any)=>{
      this.pausedArray = [...data] ;
    })
  }
  // set date and time when started and paused
  getTime(){
    var d = new Date() ;
    let date = d.getDate() +'-'+d.getMonth() +'-' +d.getFullYear() ;
    let suffix = d.getHours() > 12 ? 'pm' :'am' ;
   return  date + ' ' + d.getHours() + ':' + d.getMinutes() +':' + d.getSeconds() + suffix ;
  }
  startCounter(){
    if(this.timeLimit)
     this.start = true ; 
     this.startCount = this.startCount + 1 ;
     this.logArr.push({val :'Started' ,time: this.getTime()})
     this.dataShare.dataShareSubject.next({action : 'started' , time : this.timeLimit ,startcount : this.startCount , pausedcount : this.pauseCount,log:this.logArr})
  }
  pauseTimer(){
    this.start = false ;
    this.pauseCount = this.pauseCount +1 ;
    this.logArr.push({val :'Paused' ,time: this.getTime()})
    this.dataShare.dataShareSubject.next({action : 'paused' ,startcount : this.startCount , pausedcount : this.pauseCount ,log : this.logArr})
  }
  // resetting to default 
  resetTimer(){
    this.start = false ;
    this.toStart = true ;
    this.timeLimit = '0';
    this.pauseCount = 0 ;
    this.startCount = 0; 
    this.logArr = [] ;
    this.pausedArray = [];
    this.dataShare.dataShareSubject.next({action : 'reset' , time : '0',startcount : this.startCount , pausedcount : this.pauseCount,log:this.logArr})
  }
  ngOnDestroy(){
    this.pausedSub.unsubscribe();
  }
}
