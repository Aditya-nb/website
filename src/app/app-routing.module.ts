// importing all the required modules and components
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLandingComponent } from './main-landing/main-landing.component'; 
import { NewsmagComponent } from './newsmag/newsmag.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


// Defining the routes for each component
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', component: MainLandingComponent },
  { path: 'home', component:MainLandingComponent},
  { path: 'newsmag', component: NewsmagComponent },
  { path: 'signup', component: SignupComponent },
  
  
];

// Exporting the routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Exporting the class
export class AppRoutingModule { }
