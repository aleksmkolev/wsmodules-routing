import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/theme';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserForAuth | undefined;

  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login() {
    this.user = {
      firstName: 'Petko',
      email: 'petkoivanov@abv.bg',
      password: '123123',
      phoneNumber: '123-123-123-123',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY)
  }
}
