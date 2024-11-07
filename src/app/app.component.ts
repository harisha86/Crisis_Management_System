import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisAlertComponent } from './components/crisis-alert/crisis-alert.component';
import { RouteUpdatesComponent } from './components/route-updates/route-updates.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CrisisAlertComponent,
    RouteUpdatesComponent,
    WeatherInfoComponent
  ],
  template: `
    <div class="app-container">
      <header>
        <h1>Crisis Management System</h1>
      </header>
      
      <main>
        <app-crisis-alert
          title="Weather Alert"
          message="Severe weather conditions expected. Please check alternative routes."
          severity="high">
        </app-crisis-alert>

        <div class="info-grid">
          <app-weather-info></app-weather-info>
          <app-route-updates></app-route-updates>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
    }
    header {
      margin-bottom: 2rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 4px;
    }
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
      margin-top: 2rem;
    }
  `]
})
export class AppComponent {}