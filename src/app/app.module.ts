import { DropdownDirective } from './shared/dropdown.directive';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from "angularfire2/storage";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA5Y-a9JJesQov7UMNrlBHFDN5wfaA9ANw",
      authDomain: "mbj-2f9fa.firebaseapp.com",
      projectId: "mbj-2f9fa",
      storageBucket: "mbj-2f9fa.appspot.com",
  }),
  AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
