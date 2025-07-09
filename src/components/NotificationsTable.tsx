import React from 'react';
import {
  Typography,
  Chip,
  Box,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  Info,
  Warning,
  Error,
  CheckCircle,
  Circle,
  Archive,
  Visibility
} from '@mui/icons-material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import type { Notification } from '../types';

interface NotificationsTableProps {
  notifications: Notification[];
}

const NotificationsTable: React.FC<NotificationsTableProps> = ({ notifications }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'info':
        return <Info color="info" />;
      case 'warning':
        return <Warning color="warning" />;
      case 'error':
        return <Error color="error" />;
      case 'success':
        return <CheckCircle color="success" />;
      case 'maintenance':
        return <Warning color="action" />;
      default:
        return <Info color="action" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'read':
        return <Visibility color="action" fontSize="small" />;
      case 'unread':
        return <Circle color="primary" fontSize="small" />;
      case 'archived':
        return <Archive color="action" fontSize="small" />;
      default:
        return <Circle color="action" fontSize="small" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'default';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'Alta';
      case 'medium':
        return 'Media';
      case 'low':
        return 'Bassa';
      default:
        return priority;
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
      field: 'status',
      headerName: '',
      width: 40,
      renderCell: (params) => (
        <Tooltip title={`Stato: ${params.row.status === 'read' ? 'Letta' : params.row.status === 'unread' ? 'Non letta' : 'Archiviata'}`}>
          <IconButton size="small">
            {getStatusIcon(params.row.status)}
          </IconButton>
        </Tooltip>
      ),
    },
    {
      field: 'type',
      headerName: '',
      width: 50,
      renderCell: (params) => (
        <Tooltip title={`Tipo: ${params.row.type}`}>
          <Box display="flex" alignItems="center">
            {getTypeIcon(params.row.type)}
          </Box>
        </Tooltip>
      ),
    },
    {
      field: 'title',
      headerName: 'Titolo',
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <Box>
          <Typography variant="body2" fontWeight="medium" noWrap>
            {params.row.title}
          </Typography>
          {params.row.sensorId && (
            <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.2 }}>
              Sensore: {params.row.sensorId}
            </Typography>
          )}
        </Box>
      ),
    },
    {
      field: 'message',
      headerName: 'Messaggio',
      flex: 1.5,
      minWidth: 250,
      renderCell: (params) => (
        <Typography 
          variant="body2" 
          color="text.secondary"
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
      field: 'priority',
      headerName: 'Priorità',
      width: 90,
      renderCell: (params) => (
        <Chip
          label={getPriorityLabel(params.row.priority)}
          color={getPriorityColor(params.row.priority) as any}
          size="small"
          variant="outlined"
        />
      ),
    },
    {
      field: 'timestamp',
      headerName: 'Data/Ora',
      width: 120,
      renderCell: (params) => (
        <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
          {formatDateTime(params.row.timestamp)}
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
      <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
        Storico Notifiche
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 1 }}>
        Elenco di tutte le notifiche ricevute e il loro stato
      </Typography>
      
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
            rows={sortedNotifications}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
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
                backgroundColor: '#f1f5f9',
                color: 'text.primary',
                borderBottom: '2px solid #e0e0e0',
                fontSize: '0.875rem',
                fontWeight: 'bold',
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
