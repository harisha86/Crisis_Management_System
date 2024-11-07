import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="weather-info">
      <h2>Weather Updates</h2>
      <div class="weather-details">
        <div class="condition">
          <h3>Current Conditions</h3>
          <p>{{ currentWeather.condition }}</p>
          <p>Temperature: {{ currentWeather.temperature }}°C</p>
        </div>
        <div class="alerts" *ngIf="weatherAlerts.length">
          <h3>Weather Alerts</h3>
          <div *ngFor="let alert of weatherAlerts" class="alert-item">
            <p>{{ alert.message }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .weather-info {
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 4px;
    }
    .weather-details {
      display: grid;
      gap: 1rem;
    }
    .alert-item {
      padding: 0.5rem;
      margin: 0.5rem 0;
      background: #fff3cd;
      border: 1px solid #ffeeba;
      border-radius: 4px;
    }
  `]
})
export class WeatherInfoComponent implements OnInit {
  currentWeather = {
    condition: 'Partly Cloudy',
    temperature: 22
  };

  weatherAlerts = [
    { message: 'Heavy rain expected in the next hour' }
  ];

  ngOnInit() {
    // Initialize weather data
  }
}