import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { PagesModule } from './pages/pages.module';
import { PublicPagesModule } from './public-pages/public-pages.module';

// Services
import { HttpService, LocalStorage } from './services/utility';
import { UserService, MessageService, MessageThreadService,
         SessionService } from './services/api';

// Validators
import { EqualPasswordsValidator } from './validators';

//Third Party
import { Ng2CableModule } from 'ng2-cable';
import { PagesResolver, PublicPagesResolver } from './services/resolvers';

const UTILITY_SERVICES = [
  HttpService, LocalStorage
]

const API_SERVICES = [
  UserService, MessageService, MessageThreadService, SessionService
]

const RESOLVERS = [
  PagesResolver, PublicPagesResolver
]

const THIRD_PARTY_IMPORTS = [
  Ng2CableModule
]

const VALIDATORS = [
  EqualPasswordsValidator
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PagesModule,
    PublicPagesModule,
    routing,
    ...THIRD_PARTY_IMPORTS
  ],
  providers: [
    ...UTILITY_SERVICES,
    ...API_SERVICES,
    ...RESOLVERS,
    ...VALIDATORS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
