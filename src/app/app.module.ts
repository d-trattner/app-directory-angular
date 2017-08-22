import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SxcAngular, DnnHttpProvider, DnnAngular, ContentResourceFactory } from "@2sic.com/dnn-sxc-angular";

import { ApiResourceFactory } from "./2sxc/sxc-api.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SxcAngular,
    DnnAngular,
    DnnHttpProvider,
    ContentResourceFactory,
    ApiResourceFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
