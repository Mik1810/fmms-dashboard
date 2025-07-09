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
    id: 6760,
    message: "Superamento soglia livello dell'acqua del fiume",
    status: "DELIVERED",
    timestamp: "2025-06-13T15:02:05Z",
    danger: {
      id: 435,
      dangerType: "IMMINENT_DANGER",
      timestamp: "2025-06-13T15:02:00Z",
      centerLatitude: 45.6281501,
      centerLongitude: 4.830731,
      radius: 150.0,
      sensorReadings: [
        {
          id: 456058,
          timestamp: "2025-06-13T15:00:00Z",
          value: 3.42,
          sensorId: 4860
        },
        {
          id: 6296,
          timestamp: "2025-06-13T15:00:10Z",
          value: 3.76,
          sensorId: 673
        }
      ]
    },
    user: {
      id: 493100,
      authId: "6d6e6120-d45f-4334-b320-c57c401f66ae",
      email: "michael.piccirilli@student.univaq.it",
      roles: ["ADMIN", "USER"],
      phone: "+39 3657151893",
      preferredLatitude: 45.6281501,
      preferredLongitude: 4.830731
    }
  },
  {
    id: 6761,
    message: "Velocità del vento superiore alla soglia di sicurezza",
    status: "DELIVERED",
    timestamp: "2025-07-09T16:45:00Z",
    danger: {
      id: 436,
      dangerType: "IMMINENT_DANGER",
      timestamp: "2025-07-09T16:44:30Z",
      centerLatitude: 45.6278234,
      centerLongitude: 4.825671,
      radius: 200.0,
      sensorReadings: [
        {
          id: 456059,
          timestamp: "2025-07-09T16:44:00Z",
          value: 28.3,
          sensorId: 237
        }
      ]
    },
    user: {
      id: 493100,
      authId: "6d6e6120-d45f-4334-b320-c57c401f66ae",
      email: "michael.piccirilli@student.univaq.it",
      roles: ["USER"],
      phone: "+39 3657151893",
      preferredLatitude: 45.6281501,
      preferredLongitude: 4.830731
    }
  },
  {
    id: 6762,
    message: "Flusso d'acqua nel canale principale oltre i limiti",
    status: "DELIVERED",
    timestamp: "2025-07-09T16:43:15Z",
    danger: {
      id: 437,
      dangerType: "POTENTIAL_DANGER",
      timestamp: "2025-07-09T16:43:00Z",
      centerLatitude: 45.6295123,
      centerLongitude: 4.832456,
      radius: 100.0,
      sensorReadings: [
        {
          id: 456060,
          timestamp: "2025-07-09T16:43:00Z",
          value: 12.5,
          sensorId: 235
        }
      ]
    },
    user: {
      id: 493100,
      authId: "6d6e6120-d45f-4334-b320-c57c401f66ae",
      email: "michael.piccirilli@student.univaq.it",
      roles: ["USER"],
      phone: "+39 3657151893",
      preferredLatitude: 45.6281501,
      preferredLongitude: 4.830731
    }
  },
  {
    id: 6763,
    message: "Sensore pluviometrico offline",
    status: "PENDING",
    timestamp: "2025-07-09T15:38:00Z",
    danger: {
      id: 438,
      dangerType: "LOW_RISK",
      timestamp: "2025-07-09T15:38:00Z",
      centerLatitude: 45.6298765,
      centerLongitude: 4.826543,
      radius: 50.0,
      sensorReadings: []
    },
    user: {
      id: 493100,
      authId: "6d6e6120-d45f-4334-b320-c57c401f66ae",
      email: "michael.piccirilli@student.univaq.it",
      roles: ["USER"],
      phone: "+39 3657151893",
      preferredLatitude: 45.6281501,
      preferredLongitude: 4.830731
    }
  },
  {
    id: 6764,
    message: "Umidità del suolo oltre la soglia massima consentita",
    status: "DELIVERED",
    timestamp: "2025-07-09T16:41:00Z",
    danger: {
      id: 439,
      dangerType: "POTENTIAL_DANGER",
      timestamp: "2025-07-09T16:40:45Z",
      centerLatitude: 45.6267890,
      centerLongitude: 4.831245,
      radius: 120.0,
      sensorReadings: [
        {
          id: 456061,
          timestamp: "2025-07-09T16:40:00Z",
          value: 85.4,
          sensorId: 240
        }
      ]
    },
    user: {
      id: 493100,
      authId: "6d6e6120-d45f-4334-b320-c57c401f66ae",
      email: "michael.piccirilli@student.univaq.it",
      roles: ["USER"],
      phone: "+39 3657151893",
      preferredLatitude: 45.6281501,
      preferredLongitude: 4.830731
    }
  }
];
