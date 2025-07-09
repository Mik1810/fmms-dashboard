export interface User {
  id: number;
  authId: string;
  email: string;
  roles: string[];
  phone: string;
  preferredLatitude: number;
  preferredLongitude: number;
  // Campi aggiuntivi per la UI
  name?: string;
  avatar?: string;
  department?: string;
  location?: string;
  lastAccess?: string;
  permissions?: string[];
  isActive?: boolean;
}

export interface NodeDTO {
  id: number;
  latitude: number;
  longitude: number;
  isSupernode: boolean;
  status: boolean;
  lastUpdate: string;
}

export type SensorType = 
  | 'WATER_LEVEL' 
  | 'FLOW_VELOCITY' 
  | 'SOIL_MOISTURE' 
  | 'WIND_SPEED' 
  | 'CUMULATIVE_RAINFALL';

export interface Sensor {
  id: number;
  minThreshold: number;
  maxThreshold: number;
  unitOfMeasure: string;
  type: SensorType;
  node: NodeDTO;
  // Campi aggiuntivi per la dashboard
  name?: string;
  currentValue?: number;
  status?: 'normal' | 'warning' | 'critical' | 'offline';
  distance?: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success' | 'maintenance';
  timestamp: string;
  status: 'read' | 'unread' | 'archived';
  sensorId?: number;
  priority: 'low' | 'medium' | 'high' | 'critical';
  acknowledgedBy?: string;
  acknowledgedAt?: string;
}
