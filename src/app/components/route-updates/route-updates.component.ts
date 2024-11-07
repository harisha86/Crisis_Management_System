import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route-updates',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="route-updates">
      <h2>Alternative Routes</h2>
      <div class="route-list">
        <div *ngFor="let route of alternativeRoutes" class="route-item">
          <h4>{{ route.name }}</h4>
          <p>Estimated Time: {{ route.estimatedTime }}</p>
          <p>Status: {{ route.status }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .route-updates {
      padding: 1rem;
    }
    .route-list {
      display: grid;
      gap: 1rem;
    }
    .route-item {
      padding: 1rem;
      border: 1px solid #dee2e6;
      border-radius: 4px;
    }
  `]
})
export class RouteUpdatesComponent implements OnInit {
  alternativeRoutes = [
    { name: 'Route A', estimatedTime: '30 mins', status: 'Available' },
    { name: 'Route B', estimatedTime: '45 mins', status: 'Congested' },
    { name: 'Route C', estimatedTime: '35 mins', status: 'Available' }
  ];

  ngOnInit() {
    // Initialize route data
  }
}