import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

const Logo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '.5em',
        width: 'fit-content',
      }}
    >
      <LocalMoviesIcon />
      <Typography component="h1" variant="h6">
        <strong>Movie</strong>Mania
      </Typography>
    </Box>
  );
};

export default Logo;
