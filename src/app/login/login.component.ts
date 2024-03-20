import { Component } from '@angular/core';
import { AuthenticationRequest } from '../model/auth';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showRegisterForm: boolean = true;

  request: AuthenticationRequest = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }
  authenticate(): void {
    this.authService.authenticate(this.request).subscribe(
      (response) => {

        if (response.profile === 'ADMIN') {
          this.router.navigateByUrl('/dashboard');
        } else if (response.profile === 'User') {
          this.router.navigateByUrl('/listuser');
        } else {
          // Redirection vers une page par défaut
          this.router.navigateByUrl('/home');
        }

        //console.log('Authentication successful:', response);
        //this.router.navigateByUrl('/listuser');
        //this.router.navigate(['/admin-dashboard', '/user-list']);

      },
      (error) => {
        // Handle error response, e.g., display an error message
        console.error('Error during authentication:', error);
      }
    );
  }
}
