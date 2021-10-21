import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimerService } from '../timer.service';


@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  constructor(
    public dataShare : TimerService
  ) { }
  public intervel :any ;
  public time = 0; 
  pausedArray :any = [] ;
  @Input() set startCount(val:any){
    if(val > 1 ){
    this.intervel= setInterval(()=>{
      this.intervalFunc() ;
    },1000)
    }
  } 
 
  @Input() set pausedCount(val:any){
    clearInterval(this.intervel) ;
    this.pausedArray.push(this.time)
    this.dataShare.sharePausedArray.next(this.pausedArray) ;
    // this.paused.emit()//
  }

  @Input() set timeLimit(value:any){
    this.time = parseInt(value) ;
    this.intervel = setInterval(()=>{
      this.intervalFunc() ;
    },1000)

  } 
  ngOnInit(): void {
  }
 intervalFunc(){
  if(this.time > 0){
    this.time = this.time- 1 ; 
 }else{
   clearInterval(this.intervel) ;
    this.time = 0 ;
 }
 }
}
