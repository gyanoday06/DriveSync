import React from 'react';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import './PublishPage.css';
import PublishCard from '../components/PublishCard';

const PublishPage = () => {
  return (
    <div className="publish-page-content">
      <NavigationBar/>
      <div className="publish-page-content-container">
        Pool Your Ride
      </div>
      <div className='publish-page-short-path-container'>
        <PublishCard />
      </div>
      <Footer />
    </div>
  );
};

export default PublishPage;