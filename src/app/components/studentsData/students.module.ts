import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsTableComponent } from './students-table/students-table.component';
import { StudentRoutingModule } from './students-routing.module';



@NgModule({
  declarations: [
    StudentsTableComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentsModule { }
