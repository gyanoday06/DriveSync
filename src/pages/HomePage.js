import React from 'react';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import NavigationBar from '../components/NavigationBar';
import SearchBar from '../components/SearchBar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="page-container">
      <NavigationBar />
      <div className="content-container-1">
        <SearchBar />
      </div>
      <div className="content-container-2">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
