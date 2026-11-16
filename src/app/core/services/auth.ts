import { Injectable, signal } from '@angular/core';

export type UserRole = 'admin' | 'employee';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal(false);

  userRole = signal<UserRole | null>(null);

  login(username: string, password: string): boolean {

    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn.set(true);
      this.userRole.set('admin');
      return true;
    }

    if (username === 'employee' && password === 'employee') {
      this.isLoggedIn.set(true);
      this.userRole.set('employee');
      return true;
    }

    return false;
  }

  logout(): void {
    this.isLoggedIn.set(false);
    this.userRole.set(null);
  }
}
