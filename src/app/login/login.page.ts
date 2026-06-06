import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../services/AuthService';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]})
export class LoginPage {
  username = '';
  password = '';
  loading = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.errorMessage = '';
    this.loading = true;

    

    this.router.navigateByUrl('/home');
  }

  async loginWithGoogle() {
    console.log('Initiating Google Authentication...');
    // Integration logic for Capacitor Google Auth would go here
     const user = await this.authService.googleLogin();

    console.log(user);

    this.router.navigateByUrl('/home');
  }
}
