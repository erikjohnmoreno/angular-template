import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from '.';
import { routing } from './pages.routing';

const PAGES_COMPONENTS = [
]

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    PagesComponent,
    ...PAGES_COMPONENTS
  ]
})

export class PagesModule {}