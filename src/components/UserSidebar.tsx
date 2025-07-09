import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Email,
  Business,
  LocationOn,
  Schedule,
  Badge
} from '@mui/icons-material';
import type { User } from '../types';

interface UserSidebarProps {
  user: User;
}

const UserSidebar: React.FC<UserSidebarProps> = ({ user }) => {
  const formatLastAccess = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'background.paper',
        borderRight: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
        p: 1.5,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
        <Box display="flex" flexDirection="column" alignItems="center" mb={1.5}>
          <Avatar
            src={user.avatar}
            alt={user.name || user.email}
            sx={{ width: 60, height: 60, mb: 1.5 }}
          />
          <Typography variant="h6" align="center" gutterBottom fontSize="0.95rem">
            {user.name || user.email.split('@')[0]}
          </Typography>
          <Chip 
            label={user.roles[0] || 'USER'} 
            color="primary" 
            variant="outlined"
            size="small"
          />
        </Box>

        <Divider sx={{ my: 1 }} />

        <List dense sx={{ p: 0 }}>
              <ListItem sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 35 }}>
                  <Email color="action" fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Email"
                  secondary={user.email}
                  primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 500 }}
                  secondaryTypographyProps={{ 
                    sx: { fontSize: '0.75rem', wordBreak: 'break-word' }
                  }}
                />
              </ListItem>

              <ListItem sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 35 }}>
                  <Business color="action" fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Ruolo"
                  secondary={user.roles.join(', ')}
                  primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 500 }}
                  secondaryTypographyProps={{ fontSize: '0.75rem' }}
                />
              </ListItem>

              <ListItem sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 35 }}>
                  <LocationOn color="action" fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="Coordinate GPS"
                  secondary={`${user.preferredLatitude.toFixed(4)}, ${user.preferredLongitude.toFixed(4)}`}
                  primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 500 }}
                  secondaryTypographyProps={{ fontSize: '0.75rem' }}
                />
              </ListItem>

              {user.phone && (
                <ListItem sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 35 }}>
                    <Schedule color="action" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Telefono"
                    secondary={user.phone}
                    primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 500 }}
                    secondaryTypographyProps={{ fontSize: '0.75rem' }}
                  />
                </ListItem>
              )}

              <ListItem sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 35 }}>
                  <Badge color="action" fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary="ID Utente"
                  secondary={user.id}
                  primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 500 }}
                  secondaryTypographyProps={{ fontSize: '0.75rem' }}
                />
              </ListItem>
            </List>
      </Box>
    );
  };

export default UserSidebar;
