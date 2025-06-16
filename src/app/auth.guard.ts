import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const AuthGuard = () => {
  const router = inject(Router);
  const currentUser = localStorage.getItem('user');
  const users = JSON.parse(localStorage.getItem('users') || '[]');

  if (currentUser) {
    const user = JSON.parse(currentUser);
    // Check if the current user exists in the users array
    const userExists = users.some((u: any) => 
      u.email === user.email && 
      u.password === user.password && 
      u.username === user.username
    );

    if (userExists) {
      return true;
    }
  }

  // If no user or user not found in users array, redirect to login
  return router.parseUrl('/auth/login');
}; 