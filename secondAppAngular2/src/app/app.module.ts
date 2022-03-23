import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { BrownieComponent } from './brownie/brownie.component';
import { BouttonComponent } from './boutton/boutton.component';

@NgModule({
  declarations: [
    AppComponent,
    BonjourComponent,
    BrownieComponent,
    BouttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
