import React from 'react';
import NavigationBar from '../components/NavigationBar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import './RidePage.css';

const RidePage = () => {
  return (
    <div className="search-page-content">
      <NavigationBar  isSearchPage = {true}/>
      <div className='searchbar-container-ride-page'>
        <SearchBar />
      </div>
      <div className='ride-page-content'>
        
      </div>
      <Footer />
    </div>
  );
};

export default RidePage;