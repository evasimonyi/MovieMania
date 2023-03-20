import Grid from '@mui/system/Unstable_Grid/Grid';
import Logo from './Logo/Logo';
import Search from './Search/Search';

const Header = () => {
  return (
    <Grid container spacing={2} xs={12} sx={{ height: '25%' }}>
      <Grid xs={12}>
        <Logo />
      </Grid>
      <Grid xs={12}>
        <Search />
      </Grid>
    </Grid>
  )
}

export default Header;
