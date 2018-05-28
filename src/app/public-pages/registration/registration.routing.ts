import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RegistrationComponent } from '.';

export const ROUTES: Routes = [
  {
    path: '',
    component: RegistrationComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(ROUTES);