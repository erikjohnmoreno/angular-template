import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from '.';

export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(ROUTES);