import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, TranslateModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Register</h2>
        <form (ngSubmit)="registerUser()">
          <div class="mb-4">
            <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input pInputText id="username" type="text" placeholder="Enter your username" class="w-full" [(ngModel)]="username" name="username" required />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input pInputText id="email" type="email" placeholder="Enter your email" class="w-full" [(ngModel)]="email" name="email" required />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <p-password id="password" placeholder="Enter your password" [toggleMask]="true" [fluid]="true" [feedback]="false" [(ngModel)]="password" name="password" required></p-password>
          </div>
          <div class="mb-6">
            <label for="confirmPassword" class="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <p-password id="confirmPassword" placeholder="Confirm your password" [toggleMask]="true" [fluid]="true" [feedback]="false" [(ngModel)]="confirmPassword" name="confirmPassword" required></p-password>
          </div>
          <p-button label="Register" styleClass="w-full p-button-primary" type="submit"></p-button>
        </form>
        <div class="mt-4 text-center text-gray-600">
          Already have an account? <a routerLink="/auth/login" class="text-blue-600 hover:underline">Login here</a>
        </div>
      </div>
    </div>
  `,
})
export class Register {
  username!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor(private router: Router) {}

  registerUser() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = { username: this.username, email: this.email, password: this.password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Save current user data
    localStorage.setItem('user', JSON.stringify(newUser));
    
    alert('Registration successful!');
    this.router.navigate(['/']);
  }
} 