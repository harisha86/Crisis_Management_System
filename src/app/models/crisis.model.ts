export interface Crisis {
  id: string;
  type: 'WEATHER' | 'SECURITY' | 'NATURAL_DISASTER';
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  location: string;
  description: string;
  timestamp: Date;
  status: 'ACTIVE' | 'RESOLVED';
}

export interface EmergencyUpdate {
  id: string;
  crisisId: string;
  message: string;
  timestamp: Date;
  alternativeRoutes?: string[];
}