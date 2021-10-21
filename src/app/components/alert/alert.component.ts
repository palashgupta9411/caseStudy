import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // using scroll event for infinte scroll 
    window.addEventListener('scroll',()=>{
      console.log(window.scrollY) //scrolled from top
      console.log(window.innerHeight) //visible part of screen
      console.log(document.documentElement.scrollHeight)  // Indicates the height of the entire document
      if(window.scrollY + window.innerHeight >= 
      document.documentElement.scrollHeight){
      this.addDiv()
      }
  })
  }
  buttonArr : Array<any> = ['add','add','add'] ; 

  // adding div into Array
  addDiv(){
    let i= 0 ;
    while(i<3){
      this.buttonArr.push('add');
      i++;
    }
  }
  // window alert 
  triggerAlert(val:number){
    window.alert('Button ' + val + ' is clicked') ;
  }
}
