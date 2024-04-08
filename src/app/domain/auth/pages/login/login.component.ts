import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formGroup = new FormGroup({
    name: new FormControl('João Vitor', [Validators.required]),
    username: new FormControl('joaovitorswbr', [Validators.required]),
    password: new FormControl('password', [Validators.required]),
  });
  signUp: boolean = false;
  passwordVisible: boolean = false;
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  onSubmit() {
    const method = this.signUp ? 'signUp' : 'signIn';
    this.authService[method](this.formGroup.value).subscribe((response) => {
      localStorage.setItem('token', response.data.token);
      this.router.navigate(['courses']);
    });
  }

  get title() {
    return this.signUp ? 'Welcome back !' : 'New to our community ?';
  }
  get paragraph() {
    return this.signUp
      ? `Already have an account? Sign in and start learning!`
      : `Discover a world of possibilities! Join us and explore a vibrant community
    where ideas flourish and connections thrive.`;
  }
  get src() {
    return this.signUp
      ? 'assets/sign-in-illustration.svg'
      : 'assets/sign-up-illustration.svg';
  }

  get alt() {
    return this.signUp ? 'Sign in illustration' : 'Sign up illustration';
  }
  get buttonText() {
    return this.signUp ? 'Sign In' : 'Sign Up';
  }
  get linkText() {
    return this.signUp ? 'Sign Up' : 'Sign In';
  }
}
