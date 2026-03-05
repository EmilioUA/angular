import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  public country?: Country | null;

  constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private _countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(switchMap(({ id }) => this._countriesService.searchCountryByAlphaCode(id)))
      .subscribe(country => {
        this.handleCountry(country);
      });
  }

  handleCountry(countrySearched: Country | null): void {
    if (!countrySearched) {
      this.router.navigateByUrl('home');
    }

    this.country = countrySearched;
  }
}
