import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HeroService} from '../hero.service';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,  // The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent
    private heroService: HeroService,
    private location: Location,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    this.hero$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.heroService.getHero(params.get('id')))
      );

    // NO-observable alternative
    // const id = +this.route // The JavaScript (+) operator converts the string to a number
    //   .snapshot // The route.snapshot is a static image of the route information shortly after the component was created.
    //   .paramMap.get('id');
    // this.hero$ = this.heroService.getHeroNo404(id);
  }

  goBack(hero: Hero): void {
    // this.location.back();
    const heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
  }

  save() {
    this.hero$.subscribe(res =>
      this.heroService.updateHero(res)
        .subscribe(() => this.goBack(res))
    );
  }
}
