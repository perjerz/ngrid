import { enableProdMode } from '@angular/core';
import '@angular/localize/init'; // ng-bootstrap

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { ngExpressEngine } from '@nguniversal/express-engine';
export { renderModule, renderModuleFactory } from '@angular/platform-server';