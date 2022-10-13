import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DatauserComponent } from './pages/datauser/datauser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{ MatTabsModule } from '@angular/material/tabs'
import{ MatStepperModule } from '@angular/material/stepper'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatauserComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MatTabsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
