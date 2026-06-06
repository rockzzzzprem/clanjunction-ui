import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MockAuthService {
  login(email: string, password: string): boolean {
    return Boolean(email && password && password.length >= 6);
  }

  register(username: string, email: string, password: string): boolean {
    return Boolean(username && email && password && password.length >= 6);
  }
}
