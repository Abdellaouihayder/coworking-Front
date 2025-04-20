import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FreelanceDashboardComponent } from './freelance-dashboard/freelance-dashboard.component';
import { StagiaireDashboardComponent } from './stagiaire-dashboard/stagiaire-dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },      // redirection par défaut vers home
  { path: 'home', component: HomeComponent },               // page d'accueil
  { path: 'signin', component: SigninComponent },           // connexion
  { path: 'signup', component: SignupComponent },           // inscription
  { path: 'freelance-dashboard', component: FreelanceDashboardComponent },
  { path: 'stagiaire-dashboard', component: StagiaireDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
