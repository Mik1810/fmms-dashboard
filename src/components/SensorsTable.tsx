import React from 'react';
import {
  Typography,
  Chip,
  Box
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import type { Sensor } from '../types';

interface SensorsTableProps {
  sensors: Sensor[];
}

const SensorsTable: React.FC<SensorsTableProps> = ({ sensors }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'success';
      case 'warning':
        return 'warning';
      case 'critical':
        return 'error';
      case 'offline':
        return 'default';
      default:
        return 'default';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'normal':
        return 'Normale';
      case 'warning':
        return 'Attenzione';
      case 'critical':
        return 'Critico';
      case 'offline':
        return 'Offline';
      default:
        return status;
    }
  };

  const formatDateTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getSensorTypeLabel = (type: string) => {
    switch (type) {
      case 'WATER_LEVEL':
        return 'Livello Acqua';
      case 'FLOW_VELOCITY':
        return 'Velocità Flusso';
      case 'SOIL_MOISTURE':
        return 'Umidità Suolo';
      case 'WIND_SPEED':
        return 'Velocità Vento';
      case 'CUMULATIVE_RAINFALL':
        return 'Pioggia Cumulativa';
      default:
        return type;
    }
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Sensore',
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <Box sx={{ lineHeight: 1.2 }}>
          <Typography variant="body2" fontWeight="medium" noWrap sx={{ mb: 0 }}>
            {params.row.name || `Sensore ${params.row.id}`}
          </Typography>
          <Typography variant="caption" color="text.secondary" noWrap sx={{ lineHeight: 1 }}>
            ID: {params.row.id} - {getSensorTypeLabel(params.row.type)}
          </Typography>
        </Box>
      ),
    },
    {
      field: 'location',
      headerName: 'Coordinate',
      flex: 0.8,
      minWidth: 140,
      renderCell: (params) => (
        <Typography variant="body2" fontSize="0.75rem">
          {params.row.node.latitude.toFixed(4)}, {params.row.node.longitude.toFixed(4)}
        </Typography>
      ),
    },
    {
      field: 'distance',
      headerName: 'Dist. (m)',
      width: 80,
      type: 'number',
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Typography variant="body2">
          {params.row.distance || 'N/A'}
        </Typography>
      ),
    },
    {
      field: 'currentValue',
      headerName: 'Valore',
      flex: 0.6,
      minWidth: 100,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Typography variant="body2" fontWeight="medium" noWrap>
          {params.row.currentValue || 'N/A'} {params.row.unitOfMeasure}
        </Typography>
      ),
    },
    {
      field: 'thresholds',
      headerName: 'Soglie',
      flex: 0.7,
      minWidth: 110,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
          {params.row.minThreshold} - {params.row.maxThreshold} {params.row.unitOfMeasure}
        </Typography>
      ),
    },
    {
      field: 'status',
      headerName: 'Stato',
      width: 100,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Chip
          label={getStatusLabel(params.row.status || 'normal')}
          color={getStatusColor(params.row.status || 'normal') as any}
          size="small"
          variant="filled"
        />
      ),
    },
    {
      field: 'lastUpdate',
      headerName: 'Aggiorn.',
      width: 100,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
          {formatDateTime(params.row.node.lastUpdate)}
        </Typography>
      ),
    },
  ];

  // Ordina i sensori per distanza e prendi i primi 10
  const closestSensors = [...sensors]
    .sort((a, b) => (a.distance || 999) - (b.distance || 999))
    .slice(0, 10);

  return (
    <Box sx={{ width: '100%', mb: 1 }}>
      <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', px: 1, pt: 1 }}>
        Sensori attorno a te
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 1 }}>
        Visualizzazione dei 10 sensori più vicini con rilevazioni e soglie
      </Typography>
      
      <Box sx={{ width: '100%' }}>          <DataGrid
            rows={closestSensors}
            columns={columns}
            autoHeight
            hideFooter
            disableRowSelectionOnClick
            sx={{
              width: '100%',
              border: 'none',
              backgroundColor: 'background.paper',
              '& .MuiDataGrid-cell': {
                borderBottom: '1px solid #f0f0f0',
                fontSize: '0.875rem',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
              },
              '& .MuiDataGrid-row': {
                backgroundColor: 'background.paper',
                '&:hover': {
                  backgroundColor: '#f8fafc',
                },
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: '#121528 !important',
                color: 'white !important',
                borderBottom: '2px solid #e0e0e0',
                fontSize: '0.875rem',
                fontWeight: 'bold',
                '& .MuiDataGrid-columnHeaderTitle': {
                  textAlign: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  width: '100%',
                },
              },
              '& .MuiDataGrid-columnHeader': {
                backgroundColor: '#121528 !important',
                color: 'white !important',
                justifyContent: 'center',
                '&:hover': {
                  backgroundColor: '#121528 !important',
                },
                '& .MuiDataGrid-iconButtonContainer': {
                  color: 'white !important',
                },
                '& .MuiDataGrid-menuIcon': {
                  color: 'white !important',
                },
                '& .MuiDataGrid-sortIcon': {
                  color: 'white !important',
                },
              },
              '& .MuiDataGrid-columnHeaderTitle': {
                color: 'white !important',
                fontWeight: 'bold',
                textAlign: 'center',
                justifyContent: 'center',
                flex: 1,
              },
              '& .MuiDataGrid-root': {
                border: 'none',
                backgroundColor: 'background.paper',
              },
              '& .MuiDataGrid-main': {
                overflow: 'visible',
              },
              '& .MuiDataGrid-virtualScroller': {
                overflow: 'visible',
              },
            }}
          />
        </Box>
      </Box>
    );
  };

export default SensorsTable;
