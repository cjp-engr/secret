import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookFormListComponent } from './books/book-form-list/book-form-list.component';
import { HeaderComponent } from './navbar/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookFormComponent,
    BookListComponent,
    BookFormListComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
