import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../../redux/reduxHooks';
import { MovieType } from './MovieTypes';
import { addToWatchlist } from '../../redux/userSlice';

type MovieProps = {
  movie: MovieType;
};

const Movie = (props: MovieProps) => {
  const { movie } = props;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addToWatchlist(movie));
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 460,
        backgroundColor: 'rgba(250,250,250,0.8)',
        '& img': {
          height: '70% !important',
        },
        '& .MuiCardContent-root': {
          padding: '.4em .6em',
          flex: 1,
          justifyContent: 'space-evenly',
        },
      }}
    >
      <CardMedia
        image={movie.img}
        title={movie.title}
        component="img"
      />
      <CardContent
        sx={{
          justifyContent: 'space-around',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography gutterBottom variant="subtitle1" component="div" sx={{ textAlign: 'center' }}>
          {movie.title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {movie.year}
        </Typography>
        <CardActions
          sx={{
            marginTop: 'auto',
          }}
        >
          <Button onClick={handleClick}>Add to watchlist</Button>
        </CardActions>
      </CardContent>
    </Card >
  );
};

export default Movie;
