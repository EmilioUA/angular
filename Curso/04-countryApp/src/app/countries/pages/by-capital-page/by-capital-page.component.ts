import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private _countriesService: CountriesService) {}

  searchByCapital(term: string) {
    this._countriesService.searchCapital(term).subscribe(res => {
      this.countries = res;
    });
  }
}
