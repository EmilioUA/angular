import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { asyncScheduler, catchError, map, Observable, scheduled } from 'rxjs';
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

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) {
      throw new Error('Hero ID is required');
    }

    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  deleteHero(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/heroes/${id}`).pipe(
      map(() => true),
      catchError(() => scheduled([false], asyncScheduler))
    );
  }
}
