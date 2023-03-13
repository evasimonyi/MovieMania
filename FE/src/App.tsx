import Grid from '@mui/system/Unstable_Grid';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

const App = () => {
  return (
    <Grid container sx={{ height: '100vh', gridTemplateRows: '[row1-start] 25% auto;' }}>
      <Header />
      <Dashboard />
    </Grid>
  );
};

export default App;
