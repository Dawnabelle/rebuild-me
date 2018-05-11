
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeyImagesComponent } from './bey-images/bey-images.component';
import { EventsComponent } from './events/events.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BeyImagesComponent
  },
  {
    path: 'events',
    component: EventsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
