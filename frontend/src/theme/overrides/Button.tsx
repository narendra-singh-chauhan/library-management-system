// types
import type { Theme } from '@mui/material/styles';

const Button = (theme: Theme) => {
    return {
        MuiButton: {
            styleOverrides: {
                textInherit: {
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                    }
                }
            }
        }
    };
};

export default Button;