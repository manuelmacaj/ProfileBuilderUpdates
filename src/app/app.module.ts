import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProfileBulderListsComponent} from './Components/profile-bulder-lists/Profile-list/profile-bulder-lists.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialDesignModule} from "./Material design/material-design/material-design.module";
import { AddProfileButtonComponent } from './Components/profile-bulder-lists/Profile-list/add-profile-button/add-profile-button.component';
import { DialogNewProfileComponent } from './Components/profile-bulder-lists/Profile-list/add-profile-button/New profile/dialog-new-profile/dialog-new-profile.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProfileBulderListsComponent,
    AddProfileButtonComponent,
    DialogNewProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
