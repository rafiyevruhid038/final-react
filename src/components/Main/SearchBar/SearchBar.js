import React, { useState } from 'react';
import './searchbar.css';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search games...'
        value={searchText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
