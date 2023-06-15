import { getManifest } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { CustomManifest, CustomRemoteConfig } from './custom-remote-config';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  remotes: CustomRemoteConfig[] = [];
  item: WebComponentWrapperOptions = {
    type: 'module',
    remoteEntry: 'http://localhost:4202/remoteEntry.js',
    exposedModule: './web-components',
    elementName: 'angular-header-element'
  }

  constructor() {
  }

  ngOnInit() {
    const manifest = getManifest<CustomManifest>();
    this.remotes = Object.values(manifest);
  }
}
