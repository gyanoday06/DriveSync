import React from 'react';
import NavigationBar from '../components/NavigationBar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import './SearchPage.css';

const SearchPage = () => {
  return (
    <div className="search-page-content">
      <NavigationBar  isSearchPage = {true}/>
      <div className='search-page-text'>
      Find a ride
      </div>
      <div className="search-page-content-container">
        <SearchBar />
      </div>
      <div className='search-page-short-path-container'>
        {/* Shortest Path */ }
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;