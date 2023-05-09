import {Montserrat, Roboto} from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import {blue} from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});



const montserrat = Montserrat({  weight: ['500', '600', '700', '800'], subsets: ['latin']})

// Create a theme instance.
const theme = createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#009BE8',
        },
        secondary: {
          main: '#f73c95',
        },
      },
      typography: montserrat,
      spacing: 8,
}


);

export default theme;
