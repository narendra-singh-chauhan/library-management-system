// packages
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Routes from '@/routes.tsx';
// theme
import ThemeProvider from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
