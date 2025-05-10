import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext'; 

const SearchBar = () => {
  const { setSearchQuery } = useProducts();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); 
    setSearchQuery(inputValue); 
  };

  const handleClear = () => {
    setInputValue('');
    setSearchQuery(''); 
  };

  return (
    <form className="search-container" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="მოძებნეთ პროდუქტები..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit" className="search-button">
        ძიება
      </button>
      {inputValue && (
        <button type="button" className="search-button" onClick={handleClear}>
          X
        </button>
      )}
    </form>
  );
};

export default SearchBar;