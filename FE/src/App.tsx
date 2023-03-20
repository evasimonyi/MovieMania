import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
      <Box sx={{ display: 'flex', width: '100%', flex: 1 }}>
        <Header />
      </Box>
      <Box sx={{ display: 'flex', width: '100%', flex: 1 }}>
        <Dashboard />
      </Box>
    </Box>
  );
};

export default App;
