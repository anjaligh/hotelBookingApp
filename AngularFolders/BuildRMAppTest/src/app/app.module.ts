import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LoginTwoComponent } from './login-two/login-two.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { RoHomeComponent } from './ro-home/ro-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    LoginTwoComponent,
    PasswordResetComponent,
    SignupSuccessComponent,
    RoHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
