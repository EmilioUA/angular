import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WikiService {
  private readonly API_URL = 'https://swapi.tech/api/';

  constructor(private http: HttpClient) {}

  public getAllCategories(category: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}${category}`);
  }

  public getArticle(category: string, id: string): Observable<any> {
    return this.http.get<any>(this.API_URL + category + '/' + id);
  }
}
