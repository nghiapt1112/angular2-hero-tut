import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,  // The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent
    private heroService: HeroService,
    private location: Location // The location is an Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here.
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route // The JavaScript (+) operator converts the string to a number
      .snapshot // The route.snapshot is a static image of the route information shortly after the component was created.
      .paramMap.get('id');
    this.heroService.getHeroNo404(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save() {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
