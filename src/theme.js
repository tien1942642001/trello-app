import { red } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = extendTheme({
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
})

export default theme