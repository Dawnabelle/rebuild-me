import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BeyImagesComponent } from './bey-images/bey-images.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AdminComponent } from './admin/admin.component';
import { EditEventComponent } from './edit-event/edit-event.component';

export const firebaseConfig = {
apiKey: masterFirebaseConfig.apiKey,
authDomain: masterFirebaseConfig.authDomain,
databaseURL: masterFirebaseConfig.databaseURL,
storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BeyImagesComponent,
    NavMenuComponent,
    EventsComponent,
    EventDetailComponent,
    AdminComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
