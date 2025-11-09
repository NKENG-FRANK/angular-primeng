import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ButtonModule, 
    CheckboxModule, 
    InputTextModule,
    RippleModule,
    ToastModule, 
    ConfirmDialogModule
  ],
  providers: [ConfirmationService, MessageService],
  template: `
    <p-confirmDialog></p-confirmDialog>
    <p-toast></p-toast>
    
    <div class="auth-container">
      <div class="auth-background">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
      </div>
      
      <div class="auth-card-wrapper">
        <div class="auth-card">
          <!-- Logo Section -->
          <div class="logo-section">
            <div class="logo-container">
              <svg xmlns="http://www.w3.org/2000/svg" class="logo-svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.09219 2.87829C5.94766 3.67858 4.9127 4.62478 4.01426 5.68992C7.6857 5.34906 12.3501 5.90564 17.7655 8.61335C23.5484 11.5047 28.205 11.6025 31.4458 10.9773C31.1517 10.087 30.7815 9.23135 30.343 8.41791C26.6332 8.80919 21.8772 8.29127 16.3345 5.51998C12.8148 3.76014 9.71221 3.03521 7.09219 2.87829ZM28.1759 5.33332C25.2462 2.06 20.9887 0 16.25 0C14.8584 0 13.5081 0.177686 12.2209 0.511584C13.9643 0.987269 15.8163 1.68319 17.7655 2.65781C21.8236 4.68682 25.3271 5.34013 28.1759 5.33332ZM32.1387 14.1025C28.2235 14.8756 22.817 14.7168 16.3345 11.4755C10.274 8.44527 5.45035 8.48343 2.19712 9.20639C2.0292 9.24367 1.86523 9.28287 1.70522 9.32367C1.2793 10.25 0.939308 11.2241 0.695362 12.2356C0.955909 12.166 1.22514 12.0998 1.50293 12.0381C5.44966 11.161 11.0261 11.1991 17.7655 14.5689C23.8261 17.5991 28.6497 17.561 31.9029 16.838C32.0144 16.8133 32.1242 16.7877 32.2322 16.7613C32.2441 16.509 32.25 16.2552 32.25 16C32.25 15.358 32.2122 14.7248 32.1387 14.1025ZM31.7098 20.1378C27.8326 20.8157 22.5836 20.5555 16.3345 17.431C10.274 14.4008 5.45035 14.439 2.19712 15.1619C1.475 15.3223 0.825392 15.5178 0.252344 15.7241C0.250782 15.8158 0.25 15.9078 0.25 16C0.25 24.8366 7.41344 32 16.25 32C23.6557 32 29.8862 26.9687 31.7098 20.1378Z"
                  class="logo-path"
                />
              </svg>
            </div>
            
            <div class="header-section">
              <h1 class="welcome-title">Welcome Back</h1>
              <p class="subtitle">
                Don't have an account?
                <a class="link-primary">Create today!</a>
              </p>
            </div>
          </div>

          <!-- Form Section -->
          <form class="auth-form" (ngSubmit)="login()">
            <div class="form-group">
              <label for="email1" class="form-label">
                Email Address
                <span class="required">*</span>
              </label>
              <div class="input-wrapper">
                <i class="pi pi-envelope input-icon"></i>
                <input 
                  pInputText 
                  id="email1" 
                  type="email" 
                  placeholder="Enter your email" 
                  class="form-input"
                  [(ngModel)]="email"
                  name="email"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="password1" class="form-label">
                Password
                <span class="required">*</span>
              </label>
              <div class="input-wrapper">
                <i class="pi pi-lock input-icon"></i>
                <input 
                  pInputText 
                  id="password1" 
                  [type]="showPassword() ? 'text' : 'password'" 
                  placeholder="Enter your password" 
                  class="form-input"
                  [(ngModel)]="password"
                  name="password"
                  required
                />
                <i 
                  [class]="showPassword() ? 'pi pi-eye-slash' : 'pi pi-eye'" 
                  class="password-toggle"
                  (click)="togglePassword()"
                ></i>
              </div>
            </div>

            <div class="form-options">
              <div class="remember-me">
                <p-checkbox 
                  id="rememberme1" 
                  [(ngModel)]="checked1" 
                  [binary]="true"
                  name="remember"
                ></p-checkbox>
                <label for="rememberme1" class="checkbox-label">Remember me</label>
              </div>
              <a class="link-primary">Forgot password?</a>
            </div>

            <button 
              pButton 
              pRipple
              type="submit" 
              class="btn-primary"
              [disabled]="!email || !password"
            >
              <i class="pi pi-sign-in"></i>
              <span>Sign In</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100vh;
    }

    .auth-container {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1.5rem;
      overflow: hidden;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .auth-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      z-index: 0;
    }

    .gradient-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.6;
      animation: float 20s infinite ease-in-out;
    }

    .orb-1 {
      width: 400px;
      height: 400px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      top: -200px;
      left: -200px;
      animation-delay: 0s;
    }

    .orb-2 {
      width: 350px;
      height: 350px;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      bottom: -150px;
      right: -150px;
      animation-delay: 7s;
    }

    .orb-3 {
      width: 300px;
      height: 300px;
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation-delay: 14s;
    }

    @keyframes float {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      33% {
        transform: translate(30px, -30px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
    }

    .auth-card-wrapper {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 480px;
      animation: slideUp 0.6s ease-out;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .auth-card {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-radius: 24px;
      padding: 3rem 2.5rem;
      box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.15),
        0 0 0 1px rgba(255, 255, 255, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .auth-card:hover {
      transform: translateY(-5px);
      box-shadow: 
        0 25px 70px rgba(0, 0, 0, 0.2),
        0 0 0 1px rgba(255, 255, 255, 0.1);
    }

    @media (prefers-color-scheme: dark) {
      .auth-card {
        background: rgba(30, 30, 40, 0.95);
        box-shadow: 
          0 20px 60px rgba(0, 0, 0, 0.3),
          0 0 0 1px rgba(255, 255, 255, 0.05);
      }
    }

    .logo-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2.5rem;
    }

    .logo-container {
      position: relative;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
      animation: pulse 3s infinite ease-in-out;
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
      }
    }

    .logo-svg {
      width: 50px;
      height: 50px;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }

    .logo-path {
      fill: white;
    }

    .header-section {
      text-align: center;
      width: 100%;
    }

    .welcome-title {
      font-size: 2rem;
      font-weight: 700;
      color: #1a1a2e;
      margin: 0 0 0.75rem 0;
      letter-spacing: -0.5px;
    }

    @media (prefers-color-scheme: dark) {
      .welcome-title {
        color: #ffffff;
      }
    }

    .subtitle {
      font-size: 0.938rem;
      color: #64748b;
      margin: 0;
      line-height: 1.5;
    }

    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }

    .link-primary {
      color: #667eea;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      transition: color 0.2s ease;
      margin-left: 0.25rem;
    }

    .link-primary:hover {
      color: #5568d3;
      text-decoration: underline;
    }

    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-label {
      font-size: 0.875rem;
      font-weight: 600;
      color: #1a1a2e;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    @media (prefers-color-scheme: dark) {
      .form-label {
        color: #ffffff;
      }
    }

    .required {
      color: #ef4444;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .input-icon {
      position: absolute;
      left: 1rem;
      color: #94a3b8;
      font-size: 1rem;
      z-index: 1;
      pointer-events: none;
    }

    .form-input {
      width: 100%;
      padding: 0.875rem 1rem 0.875rem 3rem;
      font-size: 0.938rem;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      transition: all 0.3s ease;
      background: white;
      color: #1a1a2e;
    }

    .form-input:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
    }

    .form-input::placeholder {
      color: #cbd5e1;
    }

    @media (prefers-color-scheme: dark) {
      .form-input {
        background: rgba(30, 30, 40, 0.5);
        border-color: #334155;
        color: #ffffff;
      }

      .form-input::placeholder {
        color: #64748b;
      }
    }

    .password-toggle {
      position: absolute;
      right: 1rem;
      color: #94a3b8;
      cursor: pointer;
      transition: color 0.2s ease;
      z-index: 1;
    }

    .password-toggle:hover {
      color: #667eea;
    }

    .form-options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .remember-me {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .checkbox-label {
      font-size: 0.875rem;
      color: #475569;
      cursor: pointer;
      user-select: none;
    }

    @media (prefers-color-scheme: dark) {
      .checkbox-label {
        color: #cbd5e1;
      }
    }

    .btn-primary {
      width: 100%;
      padding: 0.875rem 1.5rem;
      font-size: 1rem;
      font-weight: 600;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border: none;
      border-radius: 12px;
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    }

    .btn-primary:not(:disabled):hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
    }

    .btn-primary:not(:disabled):active {
      transform: translateY(0);
    }

    .btn-primary:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    @media (max-width: 640px) {
      .auth-card {
        padding: 2rem 1.5rem;
      }

      .welcome-title {
        font-size: 1.75rem;
      }

      .form-options {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `
})
export class Auth {
  checked1 = signal(true);
  showPassword = signal(false);
  email = '';
  password = '';

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  login() {
    if (this.email && this.password) {
      console.log('Logging in with:', this.email);
      this.confirm();
    }
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Congratulations on successfully logging in!',
      header: 'Welcome',
      icon: 'pi pi-check-circle',
      acceptLabel: 'Continue',
      rejectVisible: false,
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Login successful'
        });
        this.router.navigate(['/landing']);
      }
    });
  }

  togglePassword() {
    this.showPassword.update(v => !v);
  }
}