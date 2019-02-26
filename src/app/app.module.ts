import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { TableroComponent } from './tablero/tablero.component'
import { AppComponent }         from './app.component';
import { TableroModule } from './tablero/tablero.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from './menu/menu.module'
import { RouterModule, Routes } from '@angular/router';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

const appRoutes: Routes = [
  { path: 'play', component: TableroComponent },
  { path: 'menu', component: MenuComponent },
  { path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  }]; 


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TableroModule,
    MenuModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    SweetAlert2Module.forRoot()
  ],
  declarations: [
    AppComponent,
    TableroComponent,
    MenuComponent,
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }