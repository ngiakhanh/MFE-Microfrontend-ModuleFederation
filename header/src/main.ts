import { bootstrap } from '@angular-architects/module-federation-tools';
import { AppModule } from "./app/app.module";

// import('./bootstrap')
// 	.catch(err => console.error(err));

bootstrap(AppModule, {
    production: false,
    appType: 'microfrontend',
    // appType: 'shell'
});
