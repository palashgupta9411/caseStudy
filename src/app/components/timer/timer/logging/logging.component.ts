import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent implements OnInit {
 public date = new Date() ; 
  @Input() log :Array<any>  = [] ;
  constructor() { }
  dateArr = [] ; 
  ngOnInit(): void {
  }

}
