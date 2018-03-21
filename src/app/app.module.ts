import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material';
import { GruposModule } from './grupos/grupos.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    MatButtonModule,
    GruposModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
