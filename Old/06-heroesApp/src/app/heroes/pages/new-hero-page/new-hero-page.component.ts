import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { filter, switchMap, tap } from 'rxjs';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmDialogComponent } from '../../components/confirmDialog/confirmDialog.component';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styles: ``,
})
export class NewHeroPageComponent implements OnInit {
  public heroForm = new FormGroup({
    id: new FormControl('', { nonNullable: true }),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics, {
      nonNullable: true,
    }),
    alter_ego: new FormControl('', { nonNullable: true }),
    first_appearance: new FormControl('', { nonNullable: true }),
    characters: new FormControl('', { nonNullable: true }),
    alt_img: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) {
          return this.router.navigateByUrl('/heroes/list');
        }

        this.heroForm.reset(hero);
        return;
      });
  }

  get currentHero(): Hero {
    const hero: Hero = this.heroForm.value as Hero;

    return hero;
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroService.updateHero(this.currentHero).subscribe((hero) => {
        this.showSnackBar(`${hero.superhero} actualizado!`);
      });
      return;
    } else {
      this.heroService.addHero(this.currentHero).subscribe((hero) => {
        this.showSnackBar(`${hero.superhero} creado!`);
        this.router.navigate(['/heroes/edit', hero.id]);
      });
    }
  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Done!', {
      duration: 2500,
    });
  }

  onDelete(): void {
    if (!this.currentHero.id) throw new Error('Hero ID is required to delete');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.currentHero,
    });

    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.heroService.deleteHero(this.currentHero.id)),
        filter((wasDeleted: boolean) => wasDeleted)
      )
      .subscribe(() => {
        this.showSnackBar(`${this.currentHero.superhero} eliminado!`);
        this.router.navigate(['/heroes/list']);
      });
  }
}
