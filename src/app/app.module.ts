import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { routing } from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBqLBmKDSXn9ZMPpe0UrQZvg9B_vWBTIjg",
  authDomain: "vesile-cd5c9.firebaseapp.com",
  databaseURL: "https://vesile-cd5c9.firebaseio.com",
  projectId: "vesile-cd5c9",
  storageBucket: "vesile-cd5c9.appspot.com",
  messagingSenderId: "55050312077"
};

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing
  ],
  providers: [AuthGuard,
    AlertService,
    AuthenticationService,
    UserService],
  bootstrap: [AppComponent]
})



export class AppModule { }
