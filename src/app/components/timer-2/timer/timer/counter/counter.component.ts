import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit,OnDestroy {

  constructor(
    public datashare : TimerService
  ) { }
  public startCount = 0 ;
  public pausedCount = 0 ; 
  public timerSub : any ;
  ngOnInit(): void {
    this.timerSub = this.datashare.dataShareSubject.subscribe((data:any)=>{
      this.setUpCount(data)
    })
  }
  setUpCount(data:any){
    this.startCount = data.startcount ; 
    this.pausedCount = data.pausedcount ;
  }
  ngOnDestroy(){
    this.timerSub.unsubscribe();
  }

}
