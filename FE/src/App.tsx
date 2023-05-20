import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import image from './styles/images/corina-rainer-P2wLo_PzHjU-unsplash.jpg';

const App = () => {
  const [searchedMovie, setSearchedMovie] = useState('');
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
        gap: '1em',
      }}
    >
      <Header
        searchedMovie={searchedMovie}
        setSearchedMovie={setSearchedMovie}
      />
      <Dashboard searchedMovie={searchedMovie} />
    </Stack>
  );
};

export default App;
