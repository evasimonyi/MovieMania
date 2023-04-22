import React, { useState } from 'react';
import Box from '@mui/system/Box';

const Search = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (event: React.MouseEvent) => {
    // console.log('submit');
  }

  return (
    <Box>
      <h1>Find your next disney adventure!</h1>
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="What do you want to watch?"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          id="search-submit-button"
        >
          Search
        </button>
      </form>
    </Box>
  )
}

export default Search;
