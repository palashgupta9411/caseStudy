import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { BannerRoutingModule } from './banner-routing.module';



@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    BannerRoutingModule
  ]
})
export class BannerModule { }
