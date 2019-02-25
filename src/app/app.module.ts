import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { TableroComponent } from './tablero/tablero.component'
import { AppComponent }         from './app.component';
import { TableroModule } from './tablero/tablero.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TableroModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    TableroComponent,
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }