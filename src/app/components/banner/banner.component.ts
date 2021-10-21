import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations :[
    // using angular animation for middle text 
    trigger('rotateDiv',[
      state('inactive', style({ transform: 'scale(-1,-1)' })),
      state('active', style({ transform: 'scale(1,1)'  })),
      transition('inactive <=> active', [
       animate(3000)
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {
  state = 'active' ; 
  constructor() { }

  ngOnInit(): void {
  }
  // changing state 
  onDone(e:object){
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
