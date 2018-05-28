import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(ROUTES);