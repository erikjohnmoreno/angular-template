import { CanActivate, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from '.';
import { PagesResolver } from '../services/resolvers';

export const ROUTES: Routes = [
  { 
    path: 'pages', 
    component: PagesComponent,
    canActivate: [PagesResolver], 
    children: [
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' }
    ]
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(ROUTES);