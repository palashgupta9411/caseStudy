import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }
  @Input() startCount = 0 ;
  @Input() pausedCount = 0 ; 
  ngOnInit(): void {
  }

}
