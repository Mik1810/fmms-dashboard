import { useState } from 'react';
import {
  Box,
  CssBaseline,
  Typography,
  IconButton,
  ThemeProvider,
  createTheme
} from '@mui/material';
import {
  Menu as MenuIcon,
  Map as MapIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';
import UserSidebar from './components/UserSidebar';
import SensorsTable from './components/SensorsTable';
import NotificationsTable from './components/NotificationsTable';
import { currentUser, sensorsData, notificationsData } from './data/mockData';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#121528',
      light: '#2A2B3F',
      dark: '#0A0B14',
    },
    secondary: {
      main: '#44BCEB',
      light: '#6ECCF0',
      dark: '#2A9BC7',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#121528',
      secondary: '#64748b',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          border: '1px solid rgb(0 0 0 / 0.05)',
        },
      },
    },
  },
});

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMapOpen = () => {
    // TODO: Implementare apertura mappa
    console.log('Apertura mappa...');
  };

  const handleLogout = () => {
    // TODO: Implementare logout
    console.log('Logout...');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Layout Grid Container */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: sidebarOpen ? '280px 1fr' : '0px 1fr',
          gridTemplateRows: '64px 1fr',
          gridTemplateAreas: '"header header" "sidebar main"',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          transition: 'grid-template-columns 0.3s ease',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            gridArea: 'header',
            backgroundColor: 'primary.main',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            px: 2,
            zIndex: 1000,
          }}
        >
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            FMMS - Dashboard Monitoraggio
          </Typography>
          <Typography variant="body2" sx={{ mr: 2 }}>
            Benvenuto, {currentUser.name}
          </Typography>
          <IconButton
            color="inherit"
            onClick={handleMapOpen}
            sx={{ 
              mr: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}
            title="Apri Mappa"
          >
            <MapIcon />
            <Typography variant="body2">Map</Typography>
          </IconButton>
          <IconButton
            color="inherit"
            onClick={handleLogout}
            title="Logout"
          >
            <LogoutIcon />
          </IconButton>
        </Box>

        {/* Sidebar */}
        {sidebarOpen && (
          <Box sx={{ gridArea: 'sidebar' }}>
            <UserSidebar user={currentUser} />
          </Box>
        )}

        {/* Main Content Area */}
        <Box
          sx={{
            gridArea: 'main',
            backgroundColor: 'background.default',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            pl: 3, // Padding left per distanziare dalla sidebar
            pr: 2, // Padding right
            py: 2, // Padding verticale
          }}
        >
          <SensorsTable sensors={sensorsData} />
          
          {/* Separatore */}
          <Box sx={{ height: '2px', backgroundColor: 'divider', my: 3, mx: 2 }} />
          
          <NotificationsTable notifications={notificationsData} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
