import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { Router, provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FactoryEndpoints } from '../environments/endpoints/endpoints.factory';
import { AbstractEndpoints } from '../environments/endpoints/endpoints.abstract';
import { ServiceMonitoring } from './services/monitor.service/monitor.service';
import { AbstractServiceWordItem } from './services/word-item/word-item.service.abstract';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { FactoryServiceWordItem } from './services/word-item/word-item.service.factory';
import { AbstractServiceUserSentence } from './services/user-sentence/user-sentence.service.abstract';
import { FactoryServiceUserSentence } from './services/user-sentence/user-sentence.service.factory';
import { InterceptorError } from './interceptors/error.interceptor';
import { AbstractServiceWordGroup } from './services/word-group/word-group.service.abstract';
import { FactoryServiceWordGroup } from './services/word-group/word-group.service.factory';

import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    // APP INITIALIZER
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorError, multi: true, deps: [ServiceMonitoring] },
    { provide: AbstractEndpoints, useFactory: FactoryEndpoints, deps: [ ServiceMonitoring] },
    { provide: AbstractServiceWordItem ,useFactory: FactoryServiceWordItem, deps: [HttpClient, ServiceMonitoring, AbstractEndpoints]},
    { provide: AbstractServiceUserSentence ,useFactory: FactoryServiceUserSentence, deps: [HttpClient, ServiceMonitoring, AbstractEndpoints]},
    { provide: AbstractServiceWordGroup ,useFactory: FactoryServiceWordGroup, deps: [HttpClient, ServiceMonitoring, AbstractEndpoints]},
      provideRouter(routes),
      provideClientHydration(),
      provideToastr({
        timeOut: 10000,
        positionClass: 'toast-top-center',
        preventDuplicates: true,
      }),
      provideAnimations()]
};
