import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, asyncScheduler, catchError, map, of, scheduled } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private API_URL = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.API_URL}/alpha/${code}`;

    return this.httpClient.get<Country[]>(url).pipe(
      map(countries => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.API_URL}/capital/${term}`;

    return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.API_URL}/name/${term}`;

    return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.API_URL}/region/${term}`;

    return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])));
  }
}
