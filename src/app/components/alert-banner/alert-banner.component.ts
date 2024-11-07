import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisService } from '../../services/crisis.service';

@Component({
  selector: 'app-alert-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="alerts$ | async as alerts" class="p-4 bg-red-100">
      <div *ngFor="let alert of alerts" class="mb-2 p-3 bg-red-500 text-white rounded">
        <h3 class="font-bold">{{ alert.title }}</h3>
        <p>{{ alert.message }}</p>
      </div>
    </div>
  `
})
export class AlertBannerComponent {
  alerts$ = this.crisisService.getActiveAlerts();

  constructor(private crisisService: CrisisService) {}
}