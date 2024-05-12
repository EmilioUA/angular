import { Injectable } from '@angular/core';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly usersMockUp: string = './assets/data/users.json';
  users: User[] = [];

  constructor() {
    fetch(this.usersMockUp)
      .then((res) => res.json())
      .then((json) => {
        this.users = json;
      });
  }

  public login(email: string, password: string): User | null {
    let validUser = null;
    for (let user of this.users) {
      if (user.email === email && user.password === password) {
        validUser = user;
        break;
      }
    }

    return validUser;
  }
}
