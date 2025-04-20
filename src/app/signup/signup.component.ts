import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signup(this.user).subscribe(
      (res) => {
        alert('Inscription réussie');
        this.router.navigate(['/signin']);
      },
      (err) => {
        alert('Erreur lors de l’inscription');
      }
    );
  }
}
