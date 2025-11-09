import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { TableauComponent } from '../tableau/tableau';

// Tableau Component (you can move this to a separate file later)
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    DrawerModule,
    ButtonModule,
    AvatarModule,
    RippleModule,
    StyleClassModule,
    TableauComponent
  ],
  template: `
    <div class="landing-layout">
      <!-- Fixed Left Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-content">
          <!-- Header -->
          <div class="sidebar-header">
            <span class="inline-flex items-center gap-2">
              <svg 
                width="31" 
                height="33" 
                viewBox="0 0 33 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                class="sidebar-logo"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.09219 2.87829C5.94766 3.67858 4.9127 4.62478 4.01426 5.68992C7.6857 5.34906 12.3501 5.90564 17.7655 8.61335C23.5484 11.5047 28.205 11.6025 31.4458 10.9773C31.1517 10.087 30.7815 9.23135 30.343 8.41791C26.6332 8.80919 21.8772 8.29127 16.3345 5.51998C12.8148 3.76014 9.71221 3.03521 7.09219 2.87829ZM28.1759 5.33332C25.2462 2.06 20.9887 0 16.25 0C14.8584 0 13.5081 0.177686 12.2209 0.511584C13.9643 0.987269 15.8163 1.68319 17.7655 2.65781C21.8236 4.68682 25.3271 5.34013 28.1759 5.33332ZM32.1387 14.1025C28.2235 14.8756 22.817 14.7168 16.3345 11.4755C10.274 8.44527 5.45035 8.48343 2.19712 9.20639C2.0292 9.24367 1.86523 9.28287 1.70522 9.32367C1.2793 10.25 0.939308 11.2241 0.695362 12.2356C0.955909 12.166 1.22514 12.0998 1.50293 12.0381C5.44966 11.161 11.0261 11.1991 17.7655 14.5689C23.8261 17.5991 28.6497 17.561 31.9029 16.838C32.0144 16.8133 32.1242 16.7877 32.2322 16.7613C32.2441 16.509 32.25 16.2552 32.25 16C32.25 15.358 32.2122 14.7248 32.1387 14.1025ZM31.7098 20.1378C27.8326 20.8157 22.5836 20.5555 16.3345 17.431C10.274 14.4008 5.45035 14.439 2.19712 15.1619C1.475 15.3223 0.825392 15.5178 0.252344 15.7241C0.250782 15.8158 0.25 15.9078 0.25 16C0.25 24.8366 7.41344 32 16.25 32C23.6557 32 29.8862 26.9687 31.7098 20.1378Z"
                  class="fill-white"
                />
              </svg>
              <span class="font-semibold text-xl text-white">Your Logo</span>
            </span>
          </div>

          <!-- Scrollable Menu Content -->
          <div class="sidebar-menu">
            <!-- Navigation Items -->
            <ul class="list-none p-4 m-0">
              <li>
                <a 
                  pRipple 
                  class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors"
                  [class.active]="activeComponent() === 'tableau'"
                  (click)="loadComponent('tableau')"
                >
                  <i class="pi pi-home mr-3"></i>
                  <span class="font-medium">Tableau</span>
                </a>
              </li>
              <li>
                <a 
                  pRipple 
                  class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors"
                  [class.active]="activeComponent() === 'analytics'"
                  (click)="loadComponent('analytics')"
                >
                  <i class="pi pi-chart-line mr-3"></i>
                  <span class="font-medium">Analytics</span>
                </a>
              </li>
              <li>
                <a 
                  pRipple 
                  class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors"
                  [class.active]="activeComponent() === 'reports'"
                  (click)="loadComponent('reports')"
                >
                  <i class="pi pi-file mr-3"></i>
                  <span class="font-medium">Reports</span>
                </a>
              </li>
              <li>
                <a 
                  pRipple 
                  class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors"
                  [class.active]="activeComponent() === 'settings'"
                  (click)="loadComponent('settings')"
                >
                  <i class="pi pi-cog mr-3"></i>
                  <span class="font-medium">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="main-content">
        @if (activeComponent() === 'tableau') {
          <app-tableau />
        } @else if (activeComponent() === 'analytics') {
          <div class="content-placeholder">
            <i class="pi pi-chart-line"></i>
            <h2>Analytics</h2>
            <p>Analytics content will be displayed here</p>
          </div>
        } @else if (activeComponent() === 'reports') {
          <div class="content-placeholder">
            <i class="pi pi-file"></i>
            <h2>Reports</h2>
            <p>Reports content will be displayed here</p>
          </div>
        } @else if (activeComponent() === 'settings') {
          <div class="content-placeholder">
            <i class="pi pi-cog"></i>
            <h2>Settings</h2>
            <p>Settings content will be displayed here</p>
          </div>
        } @else {
          <div class="content-placeholder welcome">
            <i class="pi pi-home"></i>
            <h2>Welcome to Your Dashboard</h2>
            <p>Select an item from the sidebar to get started</p>
          </div>
        }
      </main>
    </div>
  `,
  styles: `
    .landing-layout {
      display: flex;
      min-height: 100vh;
      background: #f8fafc;
    }

    /* Fixed Left Sidebar */
    .sidebar {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: 280px;
      background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
      box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      overflow: hidden;
    }

    .sidebar-content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .sidebar-header {
      padding: 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .sidebar-logo {
      width: 35px;
      height: 35px;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }

    .sidebar-menu {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding-bottom: 1rem;
    }

    .sidebar-menu::-webkit-scrollbar {
      width: 6px;
    }

    .sidebar-menu::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
    }

    .sidebar-menu::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 3px;
    }

    .sidebar-menu::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .sidebar-menu a.active {
      background: rgba(255, 255, 255, 0.15);
      font-weight: 600;
    }

    /* Main Content */
    .main-content {
      margin-left: 280px;
      flex: 1;
      min-height: 100vh;
      background: #f8fafc;
    }

    .content-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 2rem;
      text-align: center;
    }

    .content-placeholder i {
      font-size: 4rem;
      color: #667eea;
      margin-bottom: 1.5rem;
    }

    .content-placeholder h2 {
      margin: 0 0 1rem 0;
      font-size: 2rem;
      font-weight: 700;
      color: #1a1a2e;
    }

    .content-placeholder p {
      margin: 0;
      font-size: 1.125rem;
      color: #64748b;
    }

    .content-placeholder.welcome {
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
    }

    @media (prefers-color-scheme: dark) {
      .landing-layout,
      .main-content {
        background: #0f172a;
      }

      .content-placeholder h2 {
        color: #ffffff;
      }

      .content-placeholder p {
        color: #cbd5e1;
      }

      .content-placeholder.welcome {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
      }
    }

    @media (max-width: 768px) {
      .sidebar {
        transform: translateX(-280px);
        transition: transform 0.3s ease;
      }

      .main-content {
        margin-left: 0;
      }
    }
  `
})
export class Landing {
  activeComponent = signal<string>('');

  loadComponent(component: string) {
    this.activeComponent.set(component);
  }
}