import { Component } from '@angular/core';

@Component({
  selector: 'app-freelance-dashboard',
  templateUrl: './freelance-dashboard.component.html',
  styleUrls: ['./freelance-dashboard.component.css']
})
export class FreelanceDashboardComponent {
  reservation = {
    date: '',
    startTime: '',
    endTime: '',
    people: 1
  };

  showPayment = false;

  submitReservation() {
    console.log('Réservation :', this.reservation);
    // Tu peux ici appeler le backend pour enregistrer la réservation
    this.showPayment = true;
  }

  processPayment() {
    alert('Paiement effectué avec succès ! 💸');
    this.showPayment = false;
  }
  payment = {
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    amount: 0
  };
  
  submitPayment() {
    console.log('Paiement soumis :', this.payment);
    alert('Paiement effectué avec succès via carte D17 ✅');
  
    // Reset formulaire après paiement
    this.payment = {
      cardNumber: '',
      cardHolder: '',
      expiryDate: '',
      cvv: '',
      amount: 0
    };
    this.showPayment = false;
  }
  
}
