import React from 'react';
import {
  Typography,
  Chip,
  Box
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import type { Notification } from '../types';

interface NotificationsTableProps {
  notifications: Notification[];
}

const NotificationsTable: React.FC<NotificationsTableProps> = ({ notifications }) => {
  const getDangerTypeColor = (dangerType: string) => {
    switch (dangerType) {
      case 'IMMINENT_DANGER':
        return 'error';
      case 'POTENTIAL_DANGER':
        return 'warning';
      case 'LOW_RISK':
        return 'success';
      default:
        return 'default';
    }
  };

  const getDangerTypeLabel = (dangerType: string) => {
    switch (dangerType) {
      case 'IMMINENT_DANGER':
        return 'Pericolo Imminente';
      case 'POTENTIAL_DANGER':
        return 'Pericolo Potenziale';
      case 'LOW_RISK':
        return 'Basso Rischio';
      default:
        return dangerType;
    }
  };

  const formatDateTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const columns: GridColDef[] = [
    {
      field: 'message',
      headerName: 'Messaggio',
      flex: 2,
      minWidth: 300,
      renderCell: (params) => (
        <Typography 
          variant="body2" 
          sx={{ 
            overflow: 'hidden', 
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {params.row.message}
        </Typography>
      ),
    },
    {
      field: 'timestamp',
      headerName: 'Data/Ora',
      width: 150,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Typography variant="body2" color="text.secondary" fontSize="0.875rem">
          {formatDateTime(params.row.timestamp)}
        </Typography>
      ),
    },
    {
      field: 'danger',
      headerName: 'Tipo Pericolo',
      width: 150,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Chip
          label={getDangerTypeLabel(params.row.danger.dangerType)}
          color={getDangerTypeColor(params.row.danger.dangerType) as any}
          size="small"
          variant="filled"
        />
      ),
    },
    {
      field: 'sensorCount',
      headerName: 'Sensori',
      width: 80,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Typography variant="body2" fontSize="0.875rem">
          {params.row.danger.sensorReadings.length}
        </Typography>
      ),
    },
  ];

  // Ordina le notifiche per timestamp (più recenti prima)
  const sortedNotifications = [...notifications].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', px: 1, pt: 1 }}>
        Notifiche di Pericolo
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom sx={{ px: 1, mb: 1 }}>
        Elenco delle notifiche ricevute
      </Typography>
      
      <Box sx={{ width: '100%' }}>
        <DataGrid
            rows={sortedNotifications}
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
              '& .MuiDataGrid-row': {
                backgroundColor: 'background.paper',
                '&:hover': {
                  backgroundColor: '#f8fafc',
                },
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

export default NotificationsTable;
