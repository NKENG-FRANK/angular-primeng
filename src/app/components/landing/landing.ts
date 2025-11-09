import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    DrawerModule,
    ButtonModule,
    AvatarModule,
    RippleModule,
    StyleClassModule
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
            <!-- Favorites Section -->
            <ul class="list-none p-4 m-0">
              <li>
                <div
                  pRipple
                  pStyleClass="@next"
                  enterFromClass="hidden"
                  enterActiveClass="animate-slidedown"
                  leaveToClass="hidden"
                  leaveActiveClass="animate-slideup"
                  class="p-3 flex items-center justify-between text-surface-300 cursor-pointer hover:text-white transition-colors"
                >
                  <span class="font-semibold text-xs tracking-wider">FAVORITES</span>
                  <i class="pi pi-chevron-down text-xs"></i>
                </div>
                <ul class="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <a pRipple class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors">
                      <i class="pi pi-home mr-3"></i>
                      <span class="font-medium">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a pRipple class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors">
                      <i class="pi pi-bookmark mr-3"></i>
                      <span class="font-medium">Bookmarks</span>
                    </a>
                  </li>
                  <li>
                    <a
                      pRipple
                      pStyleClass="@next"
                      enterFromClass="hidden"
                      enterActiveClass="animate-slidedown"
                      leaveToClass="hidden"
                      leaveActiveClass="animate-slideup"
                      class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors"
                    >
                      <i class="pi pi-chart-line mr-3"></i>
                      <span class="font-medium">Reports</span>
                      <i class="pi pi-chevron-down ml-auto text-sm"></i>
                    </a>
                    <ul class="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                      <li>
                        <a
                          pRipple
                          pStyleClass="@next"
                          enterFromClass="hidden"
                          enterActiveClass="animate-slidedown"
                          leaveToClass="hidden"
                          leaveActiveClass="animate-slideup"
                          class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors"
                        >
                          <i class="pi pi-chart-line mr-3"></i>
                          <span class="font-medium">Revenue</span>
                          <i class="pi pi-chevron-down ml-auto text-sm"></i>
                        </a>
                        <ul class="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                          <li>
                            <a pRipple class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors">
                              <i class="pi pi-table mr-3"></i>
                              <span class="font-medium">View</span>
                            </a>
                          </li>
                          <li>
                            <a pRipple class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors">
                              <i class="pi pi-search mr-3"></i>
                              <span class="font-medium">Search</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a pRipple class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors">
                          <i class="pi pi-chart-line mr-3"></i>
                          <span class="font-medium">Expenses</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a pRipple class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors">
                      <i class="pi pi-users mr-3"></i>
                      <span class="font-medium">Team</span>
                    </a>
                  </li>
                  <li>
                    <a pRipple class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors">
                      <i class="pi pi-comments mr-3"></i>
                      <span class="font-medium">Messages</span>
                      <span class="inline-flex items-center justify-center ml-auto bg-red-500 text-white rounded-full text-xs font-bold min-w-[1.5rem] h-6 px-2">3</span>
                    </a>
                  </li>
                  <li>
                    <a pRipple class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors">
                      <i class="pi pi-calendar mr-3"></i>
                      <span class="font-medium">Calendar</span>
                    </a>
                  </li>
                  <li>
                    <a pRipple class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors">
                      <i class="pi pi-cog mr-3"></i>
                      <span class="font-medium">Settings</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <!-- Application Section -->
            <ul class="list-none p-4 m-0">
              <li>
                <div
                  pRipple
                  pStyleClass="@next"
                  enterFromClass="hidden"
                  enterActiveClass="animate-slidedown"
                  leaveToClass="hidden"
                  leaveActiveClass="animate-slideup"
                  class="p-3 flex items-center justify-between text-surface-300 cursor-pointer hover:text-white transition-colors"
                >
                  <span class="font-semibold text-xs tracking-wider">APPLICATION</span>
                  <i class="pi pi-chevron-down text-xs"></i>
                </div>
                <ul class="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <a pRipple class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors">
                      <i class="pi pi-folder mr-3"></i>
                      <span class="font-medium">Projects</span>
                    </a>
                  </li>
                  <li>
                    <a pRipple class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors">
                      <i class="pi pi-chart-bar mr-3"></i>
                      <span class="font-medium">Performance</span>
                    </a>
                  </li>
                  <li>
                    <a pRipple class="flex items-center cursor-pointer px-4 py-3 rounded-lg text-surface-100 hover:bg-white/10 duration-150 transition-colors">
                      <i class="pi pi-cog mr-3"></i>
                      <span class="font-medium">Settings</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <!-- Footer Profile -->
          <div class="sidebar-footer">
            <div class="border-t border-white/10 pt-4">
              <a pRipple class="flex items-center cursor-pointer p-4 gap-3 rounded-lg text-white hover:bg-white/10 duration-150 transition-colors">
                <p-avatar 
                  image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" 
                  shape="circle" 
                  [style]="{ width: '40px', height: '40px' }"
                />
                <div class="flex flex-col flex-1">
                  <span class="font-bold text-sm">Amy Elsner</span>
                  <span class="text-xs text-surface-300">Administrator</span>
                </div>
                <i class="pi pi-sign-out text-surface-300 hover:text-white transition-colors"></i>
              </a>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="main-content">
        <div class="content-header">
          <h1>Welcome to Your Dashboard</h1>
          <div class="header-actions">
            <p-button 
              icon="pi pi-bell" 
              [rounded]="true"
              [text]="true"
              severity="secondary"
              [badge]="'5'"
              badgeSeverity="danger"
            />
            <p-button 
              icon="pi pi-search" 
              [rounded]="true"
              [text]="true"
              severity="secondary"
            />
          </div>
        </div>
        
        <div class="content-body">
          <div class="content-card">
            <h2>Dashboard Content</h2>
            <p>Your main content goes here. The sidebar is now fixed on the left side with all the original navigation items.</p>
          </div>

          <div class="content-grid">
            <div class="grid-card">
              <div class="card-icon">
                <i class="pi pi-users"></i>
              </div>
              <h3>Total Users</h3>
              <p class="stat">1,234</p>
              <span class="trend positive">+12% from last month</span>
            </div>

            <div class="grid-card">
              <div class="card-icon">
                <i class="pi pi-chart-line"></i>
              </div>
              <h3>Revenue</h3>
              <p class="stat">$45,678</p>
              <span class="trend positive">+8% from last month</span>
            </div>

            <div class="grid-card">
              <div class="card-icon">
                <i class="pi pi-shopping-cart"></i>
              </div>
              <h3>Orders</h3>
              <p class="stat">567</p>
              <span class="trend negative">-3% from last month</span>
            </div>

            <div class="grid-card">
              <div class="card-icon">
                <i class="pi pi-star"></i>
              </div>
              <h3>Reviews</h3>
              <p class="stat">892</p>
              <span class="trend positive">+15% from last month</span>
            </div>
          </div>
        </div>
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

    .sidebar-footer {
      padding: 1rem;
      margin-top: auto;
    }

    /* Main Content */
    .main-content {
      margin-left: 280px;
      flex: 1;
      padding: 2rem;
      min-height: 100vh;
    }

    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      background: white;
      padding: 1.5rem 2rem;
      border-radius: 16px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .content-header h1 {
      margin: 0;
      color: #1a1a2e;
      font-size: 1.75rem;
      font-weight: 700;
    }

    .header-actions {
      display: flex;
      gap: 0.5rem;
    }

    .content-body {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .content-card {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .content-card h2 {
      margin: 0 0 1rem 0;
      color: #1a1a2e;
      font-size: 1.5rem;
      font-weight: 700;
    }

    .content-card p {
      margin: 0;
      color: #475569;
      font-size: 1rem;
      line-height: 1.6;
    }

    .content-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .grid-card {
      background: white;
      padding: 1.5rem;
      border-radius: 16px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .grid-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    .card-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }

    .card-icon i {
      font-size: 1.5rem;
      color: white;
    }

    .grid-card h3 {
      margin: 0 0 0.5rem 0;
      color: #64748b;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .stat {
      margin: 0 0 0.5rem 0;
      color: #1a1a2e;
      font-size: 2rem;
      font-weight: 700;
    }

    .trend {
      font-size: 0.875rem;
      font-weight: 500;
    }

    .trend.positive {
      color: #10b981;
    }

    .trend.negative {
      color: #ef4444;
    }

    @media (prefers-color-scheme: dark) {
      .landing-layout {
        background: #0f172a;
      }

      .content-header,
      .content-card,
      .grid-card {
        background: #1e293b;
      }

      .content-header h1,
      .content-card h2,
      .stat {
        color: #ffffff;
      }

      .content-card p {
        color: #cbd5e1;
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

      .content-grid {
        grid-template-columns: 1fr;
      }
    }
  `
})
export class Landing {}