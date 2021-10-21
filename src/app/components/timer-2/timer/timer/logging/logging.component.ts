import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent implements OnInit ,OnDestroy {
 public date = new Date() ; 
  public log :Array<any>  = [] ;
  constructor(private datashare :TimerService) { }
  dateArr = [] ;
  public timerSub :any  
  ngOnInit(): void {
    this.timerSub = this.datashare.dataShareSubject.subscribe((data:any)=>{
      this.log = [...data.log]
    })
  }
  ngOnDestroy(){
    this.timerSub.unsubscribe();
  }
}
