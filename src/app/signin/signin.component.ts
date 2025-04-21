import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user = {
    email: '',
    password: ''
    };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.user.email || !this.user.password) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    this.authService.signin(this.user.email, this.user.password).subscribe(
      (response) => {
        if (response.success) {
         
          localStorage.setItem('userData', JSON.stringify(response.user));
          
          const userRole = response.data?.role;
          if (userRole === 'freelance') {
            this.router.navigate(['/freelance-dashboard']);
          } else if (userRole === 'stagiaire') {
            this.router.navigate(['/stagiaire-dashboard']);
          } else {
            this.router.navigate(['/']);
          }
        } else {
          alert(response.message || 'Erreur lors de la connexion.');
        }
      },
      (error) => {
        alert('Erreur lors de la connexion: ' + (error.error?.message || 'Erreur inconnue'));
      }
    );
  }
}
