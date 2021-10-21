import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {

  constructor() { }
  studentsJson :any = {
    studentsTableHeader : ['Name','Class','Section','Sub1','Sub2','Sub3'] ,
    studentsData  : [
      {Name:'asdf',Class:3,Section:'D',Sub1:23,Sub2:45,Sub3:82},
      {Name:'adsf',Class:3,Section:'E',Sub1:36,Sub2:34,Sub3:67},
      {Name:'asfd',Class:3,Section:'F',Sub1:20,Sub2:34,Sub3:50}
  ]
}
  public flag : number = 1 ;
  public sortForHeader :string = '' ;
  public defaultRowData : any = [] ;
  ngOnInit(): void {
    this.defaultRowData =[...this.studentsJson.studentsData]
  }
  sortData(val:string){
    debugger
     if(this.sortForHeader == val) {
        if(this.flag == 1){
          this.flag = 2 ;
          this.sortDecending(val) ;
        }else if(this.flag == 3 ){
          this.flag = 1 ; 
          this.sortAscending(val)
        }
        else{
          this.flag = 3 
          this.studentsJson.studentsData = [...this.defaultRowData] ; 
        }
     }else{
       this.flag = 1 ;
       this.sortForHeader = val ; 
       this.sortAscending(val)
     }
  }
  sortDecending(val :string){
    if(val == 'Name' || val == 'Section'){
      this.studentsJson.studentsData.sort((a:any,b:any)=>{
        debugger
        return a[val].localeCompare(b[val], 'en', { sensitivity: 'base' });
      })
    }else{
    this.studentsJson.studentsData.sort((a:any,b:any)=>{
        return a[val] - b[val] ;
      })
    }
      
  }
  sortAscending(val :string){
     if(val == 'Name' || val == 'Section'){
      this.studentsJson.studentsData.sort((a:any,b:any)=>{
        return b[val].localeCompare(a[val], 'en', { sensitivity: 'base' });
      })
    }else{
    this.studentsJson.studentsData.sort((a:any,b:any)=>{
        return b[val] - a[val] ;
      })
    }
  }
}
