import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from '../interfaces/user.interface';
import { asyncScheduler, catchError, map, Observable, scheduled, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl: string = environment.apiUrl;
  private user?: User;

  constructor(private http: HttpClient) {}

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<User> {
    //TODO: Implement login post request in the backend, /login body:{ email, password }

    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap(user => (this.user = user)),
      tap(() => localStorage.setItem('token', 'eyWweuww.algadaea.asdadslo'))
    );
  }

  logOut(): void {
    this.user = undefined;
    localStorage.removeItem('token');
  }

  chkAuthStatus(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if (!token) {
      return scheduled([false], asyncScheduler)
    }

    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap(user => (this.user = user)),
      map(user => !!user),
      catchError(() => scheduled([false], asyncScheduler))
    );
  }
}
