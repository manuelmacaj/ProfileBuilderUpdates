import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProfileBulderListsComponent} from './Components/profile-bulder-lists/profile-bulder-lists.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialDesignModule} from "./Material design/material-design/material-design.module";

@NgModule({
  declarations: [
    AppComponent,
    ProfileBulderListsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
