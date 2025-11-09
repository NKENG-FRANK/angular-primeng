import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet/>
  `,
  styles: [`
    h2 {
      color: #007bff;
      margin-bottom: 1rem;
    }
  `]
})
export class App {
  protected readonly title = signal('angular-primeng');

  onClick() {
    alert('Hello from PrimeNG button!');
  }
}
