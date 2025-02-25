import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutes } from './authentication-routing';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(AuthenticationRoutes)],
  exports: [FormsModule, ReactiveFormsModule]
})
export class AuthenticationModule {}
