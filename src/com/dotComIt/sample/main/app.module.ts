import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import { HttpModule }    from '@angular/http';
import {TestService} from "../services/TestService";

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      HttpModule
  ],
  declarations: [ AppComponent],
  providers : [TestService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
