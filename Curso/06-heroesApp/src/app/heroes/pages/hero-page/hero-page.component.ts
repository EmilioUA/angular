import { ActivatedRoute, Router } from '@angular/router';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``,
})
export class HeroPageComponent implements OnInit, OnChanges {
  @Input() heroId?: string;
  public hero?: Hero;

  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['heroId'] && changes['heroId'].currentValue) {
      this.callApi(changes['heroId'].currentValue);
    }
  }

  ngOnInit(): void {
    if (this.heroId) {
      this.callApi(this.heroId);
    } else {
      this.activatedRoute.params.pipe(
        switchMap(async ({ id }) => this.callApi(id))
      );
    }
  }

  private callApi(id: string) {
    this.heroService.getHeroById(id).subscribe((hero) => {
      if (!hero) {
        this.router.navigate(['/heroes/list']);
      }
      this.hero = hero;
    });
  }
}
