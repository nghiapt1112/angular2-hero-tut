import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version',
  template: `
    <h2>Source code version</h2>
    <button (click)="newMinor()">New minor version</button>
    <button (click)="newMajor()">New major version</button>
    <app-version-child [major]="major" [minor]="minor"></app-version-child>
  `
})
export class VersionComponent implements OnInit {
  major = 1;
  minor = 23;
  constructor() { }

  ngOnInit() {}

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
