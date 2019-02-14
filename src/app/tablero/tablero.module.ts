import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material'
import { AngularDraggableModule } from 'angular2-draggable';
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    AngularDraggableModule,
    DragDropModule
  ],
  exports: [
    MatGridListModule,
    AngularDraggableModule,
    DragDropModule
  ],
  declarations: [

  ]
})
export class TableroModule { }
