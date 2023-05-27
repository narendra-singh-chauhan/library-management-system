//
import Button from './Button';
// types
import type { Theme } from '@mui/material/styles';

const ComponentsOverrides = (theme: Theme) => {
    return Object.assign(
        Button(theme),
    );
};

export default ComponentsOverrides;