import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginTwoComponent } from './login-two/login-two.component';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'login-two',component:LoginTwoComponent},
  {path:'password-reset',component:PasswordResetComponent},
  {path:'signup-success',component:SignupSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
