import { bootstrap } from '@angular-architects/module-federation-tools';
import { initFederation } from '@angular-architects/module-federation';
import { AppModule } from './app/app.module';

initFederation('/assets/mf.manifest.json')
  .catch(err => console.error(err))
  .then(_ => {
    bootstrap(AppModule, {
      production: false,
      appType: 'shell',
      // appType: 'microfrontend'
    });
  })
  .catch(err => console.error(err));
