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

export interface SensorReading {
  id: number;
  timestamp: string;
  value: number;
  sensorId: number;
}

export interface Danger {
  id: number;
  dangerType: 'IMMINENT_DANGER' | 'POTENTIAL_DANGER' | 'LOW_RISK';
  timestamp: string;
  centerLatitude: number;
  centerLongitude: number;
  radius: number;
  sensorReadings: SensorReading[];
}

export interface NotificationUser {
  id: number;
  authId: string;
  email: string;
  roles: string[];
  phone: string;
  preferredLatitude: number;
  preferredLongitude: number;
}

export interface Notification {
  id: number;
  message: string;
  status: 'DELIVERED' | 'PENDING' | 'FAILED';
  timestamp: string;
  danger: Danger;
  user: NotificationUser;
}
