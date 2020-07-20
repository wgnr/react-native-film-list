import React from 'react'; // Context is part of react

export const themes={
    dark: 'dark',
    light: 'light'
};

// Init context with a default value themes.light
const ThemeContext = React.createContext(themes.light);
export default ThemeContext;