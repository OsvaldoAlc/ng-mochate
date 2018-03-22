import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSidenavModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatSidenavModule
  ]
})
export class MaterialSharedModule { }
