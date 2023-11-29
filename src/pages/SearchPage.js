import React from 'react';
import NavigationBar from '../components/NavigationBar';
import SearchBar from '../components/SearchBar';
import './SearchPage.css';

const SearchPage = () => {
  return (
    <div className="page-container">
      <NavigationBar  isSearchPage = {true}/>
      <div className='text'>
      Find a ride
      </div>
      <div className="content-container">
        <SearchBar />
      </div>
    </div>
  );
};

export default SearchPage;