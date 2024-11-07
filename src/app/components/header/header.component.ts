import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-blue-600 text-white p-4">
      <div class="container mx-auto">
        <h1 class="text-2xl font-bold">Crisis Management System</h1>
        <p class="text-sm">Real-time Updates & Emergency Support</p>
      </div>
    </header>
  `,
  styles: [`
    header {
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `]
})
export class HeaderComponent {}