import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useColorScheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function SelectMode() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeIcon />Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon />System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  return (
    <>
      <Container disableGutters maxWidth='false' sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
        <Box sx={{
          backgroundColor: 'primary.light',
          height: (theme) => theme.trello.appBarHeight,
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}>
          <SelectMode />
        </Box>
        <Box sx={{
          backgroundColor: 'primary.dark',
          height: (theme) => theme.trello.broadBarHeight,
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}>
          Broad bar
        </Box>
        <Box sx={{
          backgroundColor: 'primary.main',
          height: (theme) => `calc(100vh - ${theme.trello.broadBarHeight} - ${theme.trello.appBarHeight})`,
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}>Content</Box>
      </Container>
    </>
  );
}

export default App;
