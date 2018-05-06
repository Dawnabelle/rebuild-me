
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeyImagesComponent } from './bey-images/bey-images.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BeyImagesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
