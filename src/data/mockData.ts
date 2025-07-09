import type { User, Sensor, Notification } from '../types';

export const currentUser: User = {
  id: 493100,
  authId: "6d6e6120-d45f-4334-b320-c57c401f66ae",
  email: "michael.piccirilli@student.univaq.it",
  roles: ["Consumatore"],
  phone: "+39 3657151893",
  preferredLatitude: 45.6281501,
  preferredLongitude: 4.830731,
  // Campi aggiuntivi per la UI
  name: "Michael Piccirilli",
  avatar: "https://ui-avatars.com/api/?name=Michael+Piccirilli&background=121528&color=fff",
  department: "Operations & Maintenance",
  location: "Stabilimento Milano - Controllo Centrale",
  lastAccess: "2025-07-09T16:30:00Z",
  permissions: ["view_sensors", "acknowledge_alarms", "export_data", "manage_notifications"],
  isActive: true
};

export const sensorsData: Sensor[] = [
  {
    id: 234,
    minThreshold: 0.0,
    maxThreshold: 5.0,
    unitOfMeasure: "m",
    type: "WATER_LEVEL",
    node: {
      id: 1546,
      latitude: 45.6281501,
      longitude: 4.830731,
      isSupernode: true,
      status: true,
      lastUpdate: "2025-06-13T14:58:12Z"
    },
    name: "Sensore Livello Acqua - Fiume Po",
    currentValue: 2.8,
    status: 'normal',
    distance: 15
  },
  {
    id: 235,
    minThreshold: 0.0,
    maxThreshold: 10.0,
    unitOfMeasure: "m/s",
    type: "FLOW_VELOCITY",
    node: {
      id: 1547,
      latitude: 45.6295123,
      longitude: 4.832456,
      isSupernode: false,
      status: true,
      lastUpdate: "2025-07-09T16:43:00Z"
    },
    name: "Sensore Velocità Flusso - Canale Principale",
    currentValue: 12.5,
    status: 'warning',
    distance: 32
  },
  {
    id: 236,
    minThreshold: 10.0,
    maxThreshold: 80.0,
    unitOfMeasure: "%",
    type: "SOIL_MOISTURE",
    node: {
      id: 1548,
      latitude: 45.6312789,
      longitude: 4.828934,
      isSupernode: false,
      status: true,
      lastUpdate: "2025-07-09T16:44:00Z"
    },
    name: "Sensore Umidità Suolo - Campo Nord",
    currentValue: 45.6,
    status: 'normal',
    distance: 45
  },
  {
    id: 237,
    minThreshold: 0.0,
    maxThreshold: 25.0,
    unitOfMeasure: "m/s",
    type: "WIND_SPEED",
    node: {
      id: 1549,
      latitude: 45.6278234,
      longitude: 4.825671,
      isSupernode: true,
      status: true,
      lastUpdate: "2025-07-09T16:46:00Z"
    },
    name: "Sensore Velocità Vento - Stazione Meteo",
    currentValue: 28.3,
    status: 'critical',
    distance: 58
  },
  {
    id: 238,
    minThreshold: 0.0,
    maxThreshold: 200.0,
    unitOfMeasure: "mm",
    type: "CUMULATIVE_RAINFALL",
    node: {
      id: 1550,
      latitude: 45.6301456,
      longitude: 4.834782,
      isSupernode: false,
      status: true,
      lastUpdate: "2025-07-09T16:42:00Z"
    },
    name: "Pluviometro - Area Monitoraggio",
    currentValue: 125.7,
    status: 'normal',
    distance: 67
  },
  {
    id: 239,
    minThreshold: 0.5,
    maxThreshold: 4.5,
    unitOfMeasure: "m",
    type: "WATER_LEVEL",
    node: {
      id: 1551,
      latitude: 45.6289671,
      longitude: 4.827893,
      isSupernode: false,
      status: true,
      lastUpdate: "2025-07-09T16:45:00Z"
    },
    name: "Sensore Livello - Bacino Secondario",
    currentValue: 3.2,
    status: 'normal',
    distance: 78
  },
  {
    id: 240,
    minThreshold: 20.0,
    maxThreshold: 70.0,
    unitOfMeasure: "%",
    type: "SOIL_MOISTURE",
    node: {
      id: 1552,
      latitude: 45.6267890,
      longitude: 4.831245,
      isSupernode: true,
      status: true,
      lastUpdate: "2025-07-09T16:41:00Z"
    },
    name: "Sensore Umidità - Campo Sud",
    currentValue: 85.4,
    status: 'warning',
    distance: 89
  },
  {
    id: 241,
    minThreshold: 0.0,
    maxThreshold: 8.0,
    unitOfMeasure: "m/s",
    type: "FLOW_VELOCITY",
    node: {
      id: 1553,
      latitude: 45.6325678,
      longitude: 4.829567,
      isSupernode: false,
      status: true,
      lastUpdate: "2025-07-09T16:40:00Z"
    },
    name: "Sensore Flusso - Canale di Scarico",
    currentValue: 9.2,
    status: 'critical',
    distance: 95
  },
  {
    id: 242,
    minThreshold: 0.0,
    maxThreshold: 20.0,
    unitOfMeasure: "m/s",
    type: "WIND_SPEED",
    node: {
      id: 1554,
      latitude: 45.6254321,
      longitude: 4.833891,
      isSupernode: false,
      status: true,
      lastUpdate: "2025-07-09T16:39:00Z"
    },
    name: "Anemometro - Torre di Controllo",
    currentValue: 15.8,
    status: 'normal',
    distance: 102
  },
  {
    id: 243,
    minThreshold: 0.0,
    maxThreshold: 150.0,
    unitOfMeasure: "mm",
    type: "CUMULATIVE_RAINFALL",
    node: {
      id: 1555,
      latitude: 45.6298765,
      longitude: 4.826543,
      isSupernode: true,
      status: false,
      lastUpdate: "2025-07-09T15:38:00Z"
    },
    name: "Pluviometro - Stazione Remota",
    currentValue: 89.3,
    status: 'offline',
    distance: 115
  },
  {
    id: 244,
    minThreshold: 1.0,
    maxThreshold: 6.0,
    unitOfMeasure: "m",
    type: "WATER_LEVEL",
    node: {
      id: 1556,
      latitude: 45.6276543,
      longitude: 4.835219,
      isSupernode: false,
      status: true,
      lastUpdate: "2025-07-09T16:37:00Z"
    },
    name: "Sensore Livello - Serbatoio Principale",
    currentValue: 4.2,
    status: 'normal',
    distance: 125
  }
];

export const notificationsData: Notification[] = [
  {
    id: 'NOT001',
    title: 'Velocità Vento Critica',
    message: 'Il sensore di velocità vento (ID: 237) ha rilevato una velocità di 28.3 m/s, superando la soglia massima di 25.0 m/s.',
    type: 'error',
    timestamp: '2025-07-09T16:46:00Z',
    status: 'unread',
    sensorId: 237,
    priority: 'critical'
  },
  {
    id: 'NOT002',
    title: 'Velocità Flusso Eccessiva',
    message: 'Rilevata velocità di flusso anomala (9.2 m/s) nel canale di scarico. Soglia massima: 8.0 m/s.',
    type: 'error',
    timestamp: '2025-07-09T16:40:00Z',
    status: 'unread',
    sensorId: 241,
    priority: 'critical'
  },
  {
    id: 'NOT003',
    title: 'Velocità Flusso Elevata',
    message: 'La velocità del flusso nel canale principale ha raggiunto 12.5 m/s, superando la soglia consigliata di 10.0 m/s.',
    type: 'warning',
    timestamp: '2025-07-09T16:43:00Z',
    status: 'read',
    sensorId: 235,
    priority: 'medium',
    acknowledgedBy: 'Mario Bianchi',
    acknowledgedAt: '2025-07-09T16:45:00Z'
  },
  {
    id: 'NOT004',
    title: 'Umidità Suolo Elevata',
    message: 'L\'umidità del suolo nel campo sud ha raggiunto 85.4%, superando la soglia massima del 70%.',
    type: 'warning',
    timestamp: '2025-07-09T16:41:00Z',
    status: 'read',
    sensorId: 240,
    priority: 'medium',
    acknowledgedBy: 'Anna Verdi',
    acknowledgedAt: '2025-07-09T16:42:00Z'
  },
  {
    id: 'NOT005',
    title: 'Sensore Offline',
    message: 'Il pluviometro della stazione remota (ID: 243) è offline dal 2025-07-09T15:38:00Z.',
    type: 'error',
    timestamp: '2025-07-09T16:39:00Z',
    status: 'read',
    sensorId: 243,
    priority: 'high'
  },
  {
    id: 'NOT006',
    title: 'Sistema di Monitoraggio Online',
    message: 'Tutti i sistemi di monitoraggio idrologico sono operativi e funzionanti correttamente.',
    type: 'success',
    timestamp: '2025-07-09T16:00:00Z',
    status: 'read',
    priority: 'low'
  },
  {
    id: 'NOT007',
    title: 'Manutenzione Sensore Completata',
    message: 'Manutenzione programmata del sensore di livello acqua completata con successo.',
    type: 'maintenance',
    timestamp: '2025-07-09T14:30:00Z',
    status: 'archived',
    priority: 'low',
    acknowledgedBy: 'Tecnico Specializzato',
    acknowledgedAt: '2025-07-09T14:35:00Z'
  },
  {
    id: 'NOT008',
    title: 'Aggiornamento Firmware Sensori',
    message: 'È disponibile un aggiornamento firmware per 3 sensori della rete idrologica. Programmazione manutenzione consigliata.',
    type: 'info',
    timestamp: '2025-07-09T12:15:00Z',
    status: 'read',
    priority: 'medium'
  },
  {
    id: 'NOT009',
    title: 'Supernode Attivo',
    message: 'Il nodo principale della rete (ID: 1549) sta funzionando correttamente come supernode.',
    type: 'info',
    timestamp: '2025-07-09T10:30:00Z',
    status: 'unread',
    sensorId: 237,
    priority: 'low'
  },
  {
    id: 'NOT010',
    title: 'Calibrazione Periodica Richiesta',
    message: 'I sensori di umidità del suolo necessitano di calibrazione periodica entro il prossimo mese.',
    type: 'maintenance',
    timestamp: '2025-07-09T08:15:00Z',
    status: 'read',
    priority: 'medium'
  }
];
