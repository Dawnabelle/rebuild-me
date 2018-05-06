
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeyImagesComponent } from './bey-images/bey-images.component';
import { TicketsComponent } from './tickets/tickets.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BeyImagesComponent
  },
  {
    path: 'tickets',
    component: TicketsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
