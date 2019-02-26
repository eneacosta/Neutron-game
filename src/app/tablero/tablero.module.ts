import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule,MatButtonModule } from '@angular/material'
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';



@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    SweetAlert2Module
  ],
  exports: [
    MatGridListModule,
    MatButtonModule
  ],
  declarations: [

  ]
})
export class TableroModule { }
