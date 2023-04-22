import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Stack from '@mui/material/Stack';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

const App = () => {
  return (
    <Stack direction="column">
      <Box sx={{ display: 'flex', width: '100%', height: '25%' }}>
        <Header />
      </Box>
      <Box sx={{ display: 'flex', width: '100%', flex: 1, overflow: 'hidden' }}>
        <Dashboard />
      </Box>
    </Stack>
  );
};

export default App;
