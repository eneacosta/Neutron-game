import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { TableroComponent } from './tablero/tablero.component'
import { AppComponent }         from './app.component';
import { MatGridListModule } from '@angular/material'
import { TableroModule } from './tablero/tablero.module';
import { BoardComponent } from './board/board.component'
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TableroModule
  ],
  declarations: [
    AppComponent,
    TableroComponent,
    BoardComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }