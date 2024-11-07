import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrisisService } from '../../services/crisis.service';
import { GeminiService } from '../../services/gemini.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white p-4 rounded shadow">
          <h2 class="text-xl font-bold mb-4">Current Situation</h2>
          <div *ngIf="currentSituation$ | async as situation" class="mb-4">
            <p class="text-lg">{{ situation.description }}</p>
            <div class="mt-2">
              <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
                Severity: {{ situation.severity }}
              </span>
            </div>
          </div>
        </div>

        <div class="bg-white p-4 rounded shadow">
          <h2 class="text-xl font-bold mb-4">AI Assistant</h2>
          <div class="mb-4">
            <textarea
              [(ngModel)]="userQuery"
              class="w-full p-2 border rounded"
              placeholder="Ask for assistance..."
              rows="3"
            ></textarea>
            <button
              (click)="getAIAssistance()"
              class="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Get Help
            </button>
          </div>
          <div *ngIf="aiResponse" class="p-3 bg-gray-100 rounded">
            {{ aiResponse }}
          </div>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {
  currentSituation$ = this.crisisService.getCurrentSituation();
  userQuery = '';
  aiResponse = '';

  constructor(
    private crisisService: CrisisService,
    private geminiService: GeminiService
  ) {}

  async getAIAssistance() {
    if (this.userQuery.trim()) {
      this.aiResponse = await this.geminiService.getResponse(this.userQuery);
    }
  }
}