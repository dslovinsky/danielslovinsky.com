import { createContext, useContext } from 'react';

import BREAKPOINTS from 'theme/breakpoints';
import COLORS from 'theme/colors';

const theme = {
  colors: COLORS,
  breakpoints: BREAKPOINTS,
};

const ThemeContext = createContext(theme);
const useTheme = () => useContext(ThemeContext);

export default useTheme;
