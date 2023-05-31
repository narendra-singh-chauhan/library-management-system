// packages
import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
// overrides
import componentsOverrides from './overrides';
import GlobalStyles from './GlobalStyles';

// types
type ThemeProviderProps = {
    children: React.ReactNode,
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const theme = createTheme({
        palette: {
            mode: 'dark'
        }
    });

    theme.components = componentsOverrides(theme);

    return (
        <StyledEngineProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles />
                {children}
            </MuiThemeProvider>
        </StyledEngineProvider>
    );
};

export default ThemeProvider;