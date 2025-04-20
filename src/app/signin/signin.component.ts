import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user = {
    email: '',
    password: '',
    role: '' // 'freelance' ou 'stagiaire'
  };

  constructor(private router: Router) {}

  onSubmit() {
    // ✅ Simple validation côté frontend
    if (!this.user.email || !this.user.password || !this.user.role) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // 🔐 Plus tard : ici on fera appel à Spring Boot (AuthService)
    // Simule une connexion locale temporaire

    if (this.user.role === 'freelance') {
      this.router.navigate(['/freelance-dashboard']);
    } else if (this.user.role === 'stagiaire') {
      this.router.navigate(['/stagiaire-dashboard']);
    } else {
      alert("Rôle non reconnu !");
    }
  }
}
