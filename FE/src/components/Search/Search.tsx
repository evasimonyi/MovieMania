import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';

type SearchProps = {
  searchedMovie: string;
  setSearchedMovie: (searchedMovie: string) => void;
};

const Search = (props: SearchProps) => {
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
        width: '50%',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        flex: '1',
        height: '100%',
      }}
    >
      <Typography
        component="h1"
        variant="h4"
        sx={{
          marginLeft: '.1em',
        }}
      >
        Find your next adventure!
      </Typography>
      <FormGroup
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          gap: '1em',
        }}
      >
        <FormControl
          sx={{
            display: 'flex',
            flex: 1,
            border: 'none',
            borderRadius: '.3em',
          }}
        >
          <TextField
            InputLabelProps={{ shrink: false }}
            variant="outlined"
            name="search"
            id="search"
            placeholder="What do you want to watch?"
            value={searchedMovie}
            onChange={(event) => setSearchedMovie(event.target.value)}
            sx={{
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '.3em',
              width: '-webkit-fill-available',
            }}
          />
        </FormControl>
      </FormGroup>
    </Box>
  );
};

export default Search;
