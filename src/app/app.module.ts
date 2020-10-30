import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDI64R2xrHgvjwDdaW1415l7Q8QBE3I1qo",
  authDomain: "gorakhwagh-3d319.firebaseapp.com",
  databaseURL: "https://gorakhwagh-3d319.firebaseio.com",
  projectId: "gorakhwagh-3d319",
  storageBucket: "gorakhwagh-3d319.appspot.com",
  messagingSenderId: "434976600245",
  appId: "1:434976600245:web:c48aedd72e1d7005da8efc"

     
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }