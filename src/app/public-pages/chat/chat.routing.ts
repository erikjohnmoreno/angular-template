import { Routes, RouterModule, Router } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ChatComponent } from '.';

export const ROUTES: Routes = [
  {
    path: '',
    component: ChatComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(ROUTES);