import React from 'react';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import NavigationBar from '../components/NavigationBar';
import SearchBar from '../components/SearchBar';
import './HomePage.css';
import userImage from '../assets/destination.png';
import userImage2 from '../assets/find-my-friend.png';
import userImage3 from '../assets/id-card.png';

const HomePage = () => {
  return (
    <div className="page-container">
      <NavigationBar />
      <div className="content-container-1">
        <SearchBar />
      </div >
      <div className="content-container-3">
        <div className='content'>
          <img src={userImage} alt="User" style={{ width: '50px', height: '50px' }} />
          <div className='interior'>
            <span style={{ fontWeight: 'bold', color: '#333' }}>
              Your pick of partner
            </span>
            <br />
            No matter where you’re going,
            <br />
            find the perfect partner and 
            <br />
            can find at ease on our secure platform
          </div>
        </div>
        <div className='content'>
          <img src={userImage3} alt="User" style={{ width: '50px', height: '50px' }} />
          <div className='interior'>
            <span style={{ fontWeight: 'bold', color: '#333' }}>
              Trust who you travel with
            </span>
            <br />
            We do verification to get to know each
            <br />
            of our members. We check reviews,
            <br />
            profiles, and IDs, so you know who you’re traveling with
          </div>
        </div>
        <div className='content'>
          <img src={userImage2} alt="User" style={{ width: '50px', height: '50px' }} />
          <div className='interior'>
            <span style={{ fontWeight: 'bold', color: '#333' }}>
              Scroll, click, tap, and go!
            </span>
            <br />
            Finding a partner has never been
            <br />
            easier! Thanks to our simple app
            <br />
            powered by great tech, you
            <br />
            can find partner close to you in minutes.
          </div>
        </div>
      </div>
      <div className="content-container-2">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
