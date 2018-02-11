import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MediaMatcher} from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { HighlightPipe } from './highlight.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HighlightPipe
  ],
  imports: [
    AppMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MediaMatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
