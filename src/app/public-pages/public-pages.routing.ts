import { CanActivate, Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PublicPagesComponent } from '.';
import { PublicPagesResolver } from '../services/resolvers';

export const ROUTES: Routes = [
  {
    path: '',
    component: PublicPagesComponent,
    canActivate: [PublicPagesResolver],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadChildren: 'app/public-pages/login/login.module#LoginModule' },
      { path: 'registration', loadChildren: 'app/public-pages/registration/registration.module#RegistrationModule' },
      { path: 'chat', loadChildren: 'app/public-pages/chat/chat.module#ChatModule' }
    ]
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(ROUTES);