import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { MockAuthService } from '../services/mock-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
  imports: [CommonModule, FormsModule, RouterLink, IonContent],
})
export class RegisterPage {
  username = '';
  email = '';
  password = '';
  message = '';

  constructor(private authService: MockAuthService, private router: Router) {}

  onSubmit(): void {
    this.message = '';

    if (!this.authService.register(this.username, this.email, this.password)) {
      this.message = 'Please complete all fields and use a password of at least 6 characters.';
      return;
    }

    this.message = 'Mock registration successful. Redirecting...';
    this.router.navigateByUrl('/home');
  }
}
