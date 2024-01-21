import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    broadBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        // primary: {
        //   main: '#ff5252'
        // }
      }
    },
    dark: {
      palette: {
        // primary: {
        //   main: '#000'
        // }
      }
    }
  }
  // ...other properties
});
export default theme;