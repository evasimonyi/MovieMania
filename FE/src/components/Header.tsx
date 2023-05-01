import Grid from '@mui/system/Unstable_Grid/Grid';
import Logo from './Logo/Logo';
import Search from './Search/Search';

const Header = () => {
  return (
    <Grid container spacing={2} xs={12} sx={{ justifyContent: 'center', margin: 0 }}>
      <Grid xs={12}>
        <Logo />
      </Grid>
      <Grid xs={10}>
        <Search />
      </Grid>
    </Grid >
  )
}

export default Header;
