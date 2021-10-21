import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './alert.component';

const routes : Routes = [
  {path : '', component :AlertComponent}
]

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forChild(routes)
  ]
})
export class AlertRoutingModule { }
