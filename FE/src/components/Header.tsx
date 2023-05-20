import Box from '@mui/material/Box';
import Logo from './Logo/Logo';
import Search from './Search/Search';

type HeaderProps = {
  searchedMovie: string;
  setSearchedMovie: (searchedMovie: string) => void;
};

const Header = (props: HeaderProps) => {
  const {
    searchedMovie,
    setSearchedMovie,
  } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '100%',
        height: '25%',
        background: 'rgba(250, 250, 250, 0.5)',
        margin: 0,
      }}>
      <Logo />
      <Search searchedMovie={searchedMovie} setSearchedMovie={setSearchedMovie} />
    </Box>
  )
}

export default Header;
