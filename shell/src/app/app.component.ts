import { getManifest } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { CustomManifest, CustomRemoteConfig } from './custom-remote-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  remotes: CustomRemoteConfig[] = [];
  constructor() {
  }

  ngOnInit() {
    const manifest = getManifest<CustomManifest>();
    this.remotes = Object.values(manifest);
  }
}
