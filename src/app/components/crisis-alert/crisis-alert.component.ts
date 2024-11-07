import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crisis-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="alert" [class.alert-danger]="severity === 'high'">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <div class="actions">
        <button (click)="acknowledge()">Acknowledge</button>
      </div>
    </div>
  `,
  styles: [`
    .alert {
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 4px;
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
    }
    .alert-danger {
      background-color: #f8d7da;
      border-color: #f5c6cb;
      color: #721c24;
    }
    .actions {
      margin-top: 1rem;
    }
  `]
})
export class CrisisAlertComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() severity: 'low' | 'medium' | 'high' = 'low';

  acknowledge() {
    console.log('Alert acknowledged');
  }
}