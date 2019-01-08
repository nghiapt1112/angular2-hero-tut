import {Component} from '@angular/core';

@Component({
  selector: 'app-voter-parent',
  template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <app-voter *ngFor="let voter of voters" [name]="voter" (voted)="onVoted($event)"></app-voter>
  `
})
export class VoterParentComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  onVoted(agreed: boolean) {
    console.log('Event Data');
    agreed ? this.agreed++ : this.disagreed++;
  }
}
