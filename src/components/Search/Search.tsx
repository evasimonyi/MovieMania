import React, { useState } from 'react';

const Search = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (event: React.MouseEvent) => {
    console.log('submit');
  }

  return (
    <>
      <h1 className='uppercase tracking-widest text-pastel-grey text-2xl ml-1'>Find your next disney adventure!</h1>
      <form className='flex flex-1 flex-row'>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="What do you want to watch?"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className='w-4/5 h-16 opacity-20 mr-4 rounded-lg placeholder:italic placeholder:text-pastel-grey placeholder:px-2'
        />
        <button
          onClick={handleSubmit}
          type="submit"
          id="search-submit-button"
          className='h-16 px-10 rounded-lg bg-pastel-peach border border-pastel-grey uppercase tracking-widest'
        >
          Search
        </button>
      </form>
    </>
  )
}

export default Search;
