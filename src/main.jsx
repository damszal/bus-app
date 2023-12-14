import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      light: '#555555',
      main: '#6a6a6a',
      dark: '#171717',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ed4b82',
      main: '#e91e63',
      dark: '#a31545',
      contrastText: '#000',
    },
    background: {
      default: '#373737', 
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
     <CssBaseline />
      <Box sx={{
        bgcolor:'primary.dark',
        color: "primary.contrastText",
        border: 1
      }}
       >
          <App />
      </Box>
     </ThemeProvider>
  </React.StrictMode>,
)
