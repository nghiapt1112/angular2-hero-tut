import { Component } from '@angular/core';

@Component({
  selector: 'app-crisis-center',
  template: `
    <h2>Component interaction center</h2>
    <ul>
      <li><a routerLink="./version">Version</a></li>
      <li><a routerLink="./voter">Voter</a></li>
      <li><a routerLink="./mission">Mission</a></li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class CenterComponent { }
