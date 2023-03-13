import Grid from '@mui/system/Unstable_Grid/Grid';
import Logo from './Logo/Logo';
import Search from './Search/Search';

const Header = () => {
  return (
    <Grid container spacing={2} sx={{ height: '30%' }}>
      <Logo />
      <Search />
    </Grid>
  )
}

export default Header;
