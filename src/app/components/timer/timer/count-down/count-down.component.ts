import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  constructor() { }
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
  @Output() paused = new EventEmitter() ;
  @Input() set pausedCount(val:any){
    clearInterval(this.intervel) ;
    this.pausedArray.push(this.time)
    this.paused.emit(this.pausedArray)
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
