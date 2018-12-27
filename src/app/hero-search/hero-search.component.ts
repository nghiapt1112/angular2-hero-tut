import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Observable, Subject} from 'rxjs';
import {Hero} from '../hero';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      // it cancels and discards previous search observables, returning only the latest search service observable.
      // (It doesn't actually abort a pending HTTP request)
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  // Push a search term into the observable stream.
  search(value: string) {
    this.searchTerms.next(value);
  }

}
