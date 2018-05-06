import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BeyImagesComponent } from './bey-images/bey-images.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TicketLinkTabComponent } from './ticket-link-tab/ticket-link-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BeyImagesComponent,
    NavMenuComponent,
    TicketLinkTabComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
