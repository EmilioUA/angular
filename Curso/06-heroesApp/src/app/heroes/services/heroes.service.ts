import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { asyncScheduler, catchError, Observable, scheduled } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Hero } from '../interfaces/hero.interface';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`).pipe(
      catchError(() => {
        return scheduled([undefined], asyncScheduler);
        // Deprecated approach
        // of(undefined, asyncScheduler)
      })
    );
  }

  getSuggestions(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=10`);
  }
}
