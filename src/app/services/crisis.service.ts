import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Alert {
  id: string;
  title: string;
  message: string;
  severity: 'high' | 'medium' | 'low';
  timestamp: Date;
}

export interface Situation {
  id: string;
  description: string;
  severity: string;
  timestamp: Date;
  affectedAreas: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CrisisService {
  private alerts = new BehaviorSubject<Alert[]>([]);
  private currentSituation = new BehaviorSubject<Situation>({
    id: '1',
    description: 'Monitoring weather conditions',
    severity: 'medium',
    timestamp: new Date(),
    affectedAreas: ['Terminal 1', 'Terminal 2']
  });

  getActiveAlerts(): Observable<Alert[]> {
    return this.alerts.asObservable();
  }

  getCurrentSituation(): Observable<Situation> {
    return this.currentSituation.asObservable();
  }

  updateSituation(situation: Situation) {
    this.currentSituation.next(situation);
  }

  addAlert(alert: Alert) {
    const currentAlerts = this.alerts.getValue();
    this.alerts.next([...currentAlerts, alert]);
  }
}