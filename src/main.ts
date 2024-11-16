import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { isDevMode } from '@angular/core';

async function prepareApp() {
  /**
   * Don't do this. I just want to use msw in production.
   * Also include the mockServiceWorker.js only in development.
   */
  // if (isDevMode()) {
  const { worker } = await import('./browser');
  return worker.start({ onUnhandledRequest: 'bypass' });
  // }

  // return Promise.resolve();
}

prepareApp().then(() => {
  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err),
  );
});
