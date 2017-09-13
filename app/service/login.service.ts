import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable()
export class LoginService {
  isLoggedIn: boolean = false;
  constructor() { }

  login(login: Login): boolean {
    if (login.userName === 'Admin' && login.password === 'admin') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

}
