import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    background: {
      default: '#454545', // Tutaj możesz ustawić kolor tła body
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
     <CssBaseline />
      <Box sx={{
        bgcolor:'background.default',
        color: "#FEFEFE"
      }}
       >
          <App />
      </Box>
     </ThemeProvider>
  </React.StrictMode>,
)
