import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { getManifest, loadRemoteModule } from '@angular-architects/module-federation';
import { CustomManifest } from './custom-remote-config';

function initializeApp(router: Router) {
  return () => {
    const manifest = getManifest<CustomManifest>();
    const routes = Object.keys(manifest).map(key => {
      const entry = manifest[key];
      return {
          path: entry.routePath,
          loadChildren: () =>
              loadRemoteModule({
                  type: 'manifest',
                  remoteName: key,
                  exposedModule: entry.exposedModule
              })
              .then(m => m[entry.ngModuleName])
      }
    });
    router.resetConfig([...router.config, ...routes]);
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [Router],
    multi: true
   }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
