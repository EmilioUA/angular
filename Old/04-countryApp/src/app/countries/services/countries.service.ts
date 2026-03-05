import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, count, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private API_URL = 'https://restcountries.com/v3.1';

  public cacheStore = {
    byCapital: { term: '', countries: [] as Country[] },
    byCountries: { term: '', countries: [] as Country[] },
    byRegion: { region: '' as Region, countries: [] as Country[] },
  };

  constructor(private httpClient: HttpClient) {
    this.getFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private getFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.API_URL}/alpha/${code}`;

    return this.httpClient.get<Country[]>(url).pipe(
      map(countries => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.API_URL}/capital/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap(countries => (this.cacheStore.byCapital = { term, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.API_URL}/name/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap(countries => (this.cacheStore.byCountries = { term, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.API_URL}/region/${region}`;
    return this.getCountriesRequest(url).pipe(
      tap(countries => (this.cacheStore.byRegion = { region, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }
}
