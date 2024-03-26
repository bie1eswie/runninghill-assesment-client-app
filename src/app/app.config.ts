import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { Router, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FactoryServiceConfig } from './services/config.service/config.service.factory';
import { ServiceConfig } from './services/config.service/config.service';
import { FactoryEndpoints } from '../environments/endpoints/endpoints.factory';
import { AbstractEndpoints } from '../environments/endpoints/endpoints.abstract';
import { ServiceMonitoring } from './services/monitor.service/monitor.service';
import { AbstractServiceWordItem } from './services/word-item/word-item.service.abstract';
import { HttpClient } from '@angular/common/http';
import { FactoryServiceWordItem } from './services/word-item/word-item.service.factory';
import { AbstractServiceUserSentence } from './services/user-sentence/user-sentence.service.abstract';
import { FactoryServiceUserSentence } from './services/user-sentence/user-sentence.service.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    // APP INITIALIZER
    { provide: APP_INITIALIZER, useFactory: FactoryServiceConfig, deps: [ServiceConfig, Router], multi: true },
    { provide: AbstractEndpoints, useFactory: FactoryEndpoints, deps: [ServiceConfig, ServiceMonitoring] },
    { provide: AbstractServiceWordItem ,useFactory: FactoryServiceWordItem,
      deps: [HttpClient, ServiceMonitoring, AbstractEndpoints]
    },
    { provide: AbstractServiceUserSentence ,useFactory: FactoryServiceUserSentence,
      deps: [HttpClient, ServiceMonitoring, AbstractEndpoints]
    },
    provideRouter(routes),
    provideClientHydration()]
};
