import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../models/user.model';

const DEMO_USER = {
  id: 1,
  name: 'User',
  username: 'demo'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn = false;
  public loggedInUser?: User;

  constructor() {
    const user = localStorage.getItem('PRN_USER');
    if (user)  {
      this.loggedIn = true;
      this.loggedInUser = DEMO_USER;
    }
  }

  public isAuthenticated(): boolean {
    return this.loggedIn;
  }


  public login(username: string, password: string): Observable<User> {
    if (this.checkCredentials(username, password)) {
      this.loggedIn = true;
      this.loggedInUser = DEMO_USER;
      localStorage.setItem('PRN_USER', 'user')
      return of(this.loggedInUser as User)
    } else {
      return throwError('error')
    }
  }

  /** Check credentials - HARDCODED */
  private checkCredentials(username: string, password: string): boolean {
    return username === 'demo' && password === '1234';
  }

  public logout(): Observable<any> {
    this.loggedIn = false;
    this.loggedInUser = undefined;
    localStorage.removeItem('PRN_USER');
    return of({})
  }
}
