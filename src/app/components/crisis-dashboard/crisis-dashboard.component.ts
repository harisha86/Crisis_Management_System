import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Crisis } from '../../models/crisis.model';
import { GeminiService } from '../../services/gemini.service';

@Component({
  selector: 'app-crisis-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="dashboard card">
      <header class="dashboard-header">
        <h1>Crisis Management Dashboard</h1>
        <div class="status-indicator">
          <span class="pulse"></span>
          <span>Live Monitoring</span>
        </div>
      </header>
      
      <div class="crisis-alerts mt-8">
        <h2>Active Crises</h2>
        <div class="crisis-grid">
          <div *ngFor="let crisis of activeCrises" 
               class="crisis-card"
               [class]="'severity-' + crisis.severity.toLowerCase()">
            <div class="crisis-header">
              <h3>{{ crisis.type }}</h3>
              <span class="severity-badge">{{ crisis.severity }}</span>
            </div>
            <div class="crisis-content">
              <p class="location">
                <i class="fas fa-map-marker-alt"></i>
                {{ crisis.location }}
              </p>
              <p class="description">{{ crisis.description }}</p>
              <button class="btn btn-primary" (click)="getAIAssistance(crisis)">
                <i class="fas fa-robot"></i>
                Get AI Assistance
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="ai-response mt-8" *ngIf="aiResponse">
        <h2>AI Assistance</h2>
        <div class="response-card">
          <i class="fas fa-lightbulb response-icon"></i>
          <p>{{ aiResponse }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      max-width: 1400px;
      margin: 2rem auto;
      padding: 2rem;
    }

    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1rem;
      border-bottom: 2px solid var(--border);
    }

    .status-indicator {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--success);
      font-weight: 500;
    }

    .pulse {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--success);
      animation: pulse 2s infinite;
    }

    .crisis-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .crisis-card {
      background: var(--card-bg);
      border-radius: 1rem;
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .crisis-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow);
    }

    .crisis-header {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border);
    }

    .crisis-content {
      padding: 1.5rem;
    }

    .severity-badge {
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .severity-critical {
      background: #fee2e2;
      border-top: 4px solid var(--danger);
    }

    .severity-high {
      background: #fef3c7;
      border-top: 4px solid var(--warning);
    }

    .severity-medium {
      background: #e0f2fe;
      border-top: 4px solid var(--primary);
    }

    .severity-low {
      background: #dcfce7;
      border-top: 4px solid var(--success);
    }

    .location {
      color: var(--text-light);
      margin-bottom: 1rem;
    }

    .description {
      margin-bottom: 1.5rem;
    }

    .response-card {
      background: #f0f9ff;
      border-radius: 1rem;
      padding: 1.5rem;
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .response-icon {
      font-size: 1.5rem;
      color: var(--primary);
    }

    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
      }
      
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
      }
      
      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
      }
    }
  `]
})
export class CrisisDashboardComponent implements OnInit {
  activeCrises: Crisis[] = [];
  aiResponse: string = '';

  constructor(private geminiService: GeminiService) {}

  ngOnInit() {
    this.activeCrises = [
      {
        id: '1',
        type: 'WEATHER',
        severity: 'HIGH',
        location: 'Downtown Metro Station',
        description: 'Heavy flooding affecting metro lines A and B',
        timestamp: new Date(),
        status: 'ACTIVE'
      },
      {
        id: '2',
        type: 'SECURITY',
        severity: 'CRITICAL',
        location: 'Central Station',
        description: 'Security incident requiring immediate evacuation',
        timestamp: new Date(),
        status: 'ACTIVE'
      }
    ];
  }

  async getAIAssistance(crisis: Crisis) {
    const response = await this.geminiService.generateResponse(
      `${crisis.type} emergency at ${crisis.location}: ${crisis.description}`
    );
    this.aiResponse = response;
  }
}