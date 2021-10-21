import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time-limit',
  templateUrl: './time-limit.component.html',
  styleUrls: ['./time-limit.component.scss']
})
export class TimeLimitComponent implements OnInit {

  constructor() { }
  timeLimit = '0' ;
  toStart = true ; 
  start = false ;
  pauseCount = 0 ;
  logArr :any = [] ;
  @Output() paused = new EventEmitter<any>() ;
  startCount = 0 ; 
   
  @Output() action = new EventEmitter<any>();
  @Input() pausedArray : Array<number> = [] ;
  ngOnInit(): void {
  }
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
    this.action.emit({action : 'started' , time : this.timeLimit ,startcount : this.startCount , pausedcount : this.pauseCount,log:this.logArr})
    
  }
  pauseTimer(){
    this.start = false ;
    this.pauseCount = this.pauseCount +1 ;
    this.logArr.push({val :'Paused' ,time: this.getTime()})
    this.action.emit({action : 'paused' ,startcount : this.startCount , pausedcount : this.pauseCount ,log : this.logArr})
  }
  resetTimer(){
    this.start = false ;
    this.toStart = true ;
    this.timeLimit = '0';
    this.pauseCount = 0 ;
    this.startCount = 0; 
    this.logArr = [] ;
    this.pausedArray = [];
    this.action.emit({action : 'reset' , time : '0',startcount : this.startCount , pausedcount : this.pauseCount,log:this.logArr})
  }
}
