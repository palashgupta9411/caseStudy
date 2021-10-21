import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit {

  constructor() { }
  public viewType :string = 'grid' ;
  itemArray :Array<any>  = [] ;
  ngOnInit(): void {
    let i = 0 ;
    while(i<40){
      this.itemArray.push({name : 'item '+(i+1) , productId : i+1 , quantity : i+1,price:100*(i+1)});
      i++;
    }
  }

}
