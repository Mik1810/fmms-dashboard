<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Dashboard Gestionale React - Copilot Instructions

Questo progetto è una dashboard React TypeScript per un sistema di gestione con monitoraggio sensori.

## Architettura del Progetto
- **Framework**: React 18 con TypeScript
- **UI Library**: Material-UI (MUI)
- **Build Tool**: Vite
- **Componenti principali**:
  - `UserSidebar`: Sidebar con dettagli utente e stato sistema
  - `SensorsTable`: Tabella dei 10 sensori più vicini con DataGrid
  - `NotificationsTable`: Storico notifiche con stato e priorità

## Convenzioni di Codice
- Utilizzare TypeScript con tipizzazione forte
- Componenti funzionali con React Hooks
- Props tipizzate con interfacce TypeScript
- Styling con Material-UI sx prop
- Gestione stato con useState per stato locale

## Struttura Dati
- `User`: Dettagli utente (nome, email, ruolo, dipartimento, posizione)
- `Sensor`: Sensori con posizione, distanza, valori attuali e soglie
- `Notification`: Notifiche con tipo, priorità, stato di lettura

## Funzionalità Implementate
- Dashboard responsive con sidebar collassabile
- Tabella sensori ordinata per distanza (top 10)
- Sistema di notifiche con indicatori di stato
- Tematizzazione Material-UI
- Mock data per sviluppo e testing

## Suggerimenti per Sviluppo
- Mantenere la consistenza del design Material-UI
- Utilizzare i colori del tema definito (primary: #1976d2)
- Implementare responsive design per mobile
- Aggiungere validazione TypeScript rigorosa
- Seguire le best practices React per performance
