import Stack from '@mui/material/Stack';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import image from './styles/images/corina-rainer-P2wLo_PzHjU-unsplash.jpg';

const App = () => {
  return (
    <Stack
      direction="column"
      sx={{
        overflow: 'auto',
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <Header />
      <Dashboard />
    </Stack>
  );
};

export default App;
