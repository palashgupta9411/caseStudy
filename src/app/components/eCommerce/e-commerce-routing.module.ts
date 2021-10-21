import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECommerceComponent } from './e-commerce.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '' , component : ECommerceComponent}
 ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) 
  ]
})
export class ECommerceRoutingModule { }
