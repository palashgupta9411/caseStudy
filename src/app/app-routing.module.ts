import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path :'banner' , loadChildren : ()=> import('../app/components/banner/banner.module').then(m=> m.BannerModule)},
   {path :'ecommerce' , loadChildren :()=> import('./components/eCommerce/e-commerce.module').then(m=>m.ECommerceModule)},
   {path :'alert' , loadChildren :()=> import('./components/alert/alert.module').then(m=>m.AlertModule)},
   {path : 'timer' , loadChildren :()=> import('./components/timer/timer.module').then(m=>m.TimerModule)},
   {path : 'timer2' , loadChildren :()=> import('./components/timer-2/timer/timer2.module').then(m=>m.Timer2Module)},
   {path : 'students' , loadChildren :()=> import('./components/studentsData/students.module').then(m=>m.StudentsModule)}
   
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
