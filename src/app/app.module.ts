import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from './../environments/firebase.config';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';

import { Service } from './service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
