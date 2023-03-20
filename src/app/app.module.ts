// importing all the required modules and components
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { NewsmagComponent } from './newsmag/newsmag.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

// module declarations
@NgModule({
  declarations: [
    AppComponent,
    MainLandingComponent,
    NewsmagComponent,
    LoginComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})

// exporting the class
export class AppModule { }
