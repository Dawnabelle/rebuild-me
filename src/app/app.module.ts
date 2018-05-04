import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BeyImagesComponent } from './bey-images/bey-images.component';
import { MenuComponent } from './menu/menu.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BeyImagesComponent,
    MenuComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
