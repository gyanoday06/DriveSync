import React, { useState, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';
import SearchBar from '../components/SearchBar';
import './RidePage.css';

const RidePage = () => {
  const [isRide, setIsRide] = useState(true);
  const rides = [
    { price: '20$', source: 'Vellore', dest: 'Chennai', name: 'Anonymous', starttime: 520, endtime: 234, carname: 'Swift' },
    { price: '45$', source: 'Vellore', dest: 'Chennai', name: 'Anonymous', starttime: 420, endtime: 234, carname: 'Swift' },
  ];
  useEffect(() => {
    if (rides.length === 0) {
      setIsRide(false);
    }
  }, [isRide]);

  const handleRideCardClick = (ride) => {
    console.log('Ride card clicked:', ride);
  };

  return (
    <div className="search-page-content">
      <NavigationBar isSearchPage={true} />
      <div className='searchbar-container-ride-page'>
        <SearchBar />
      </div>
      <div className='ride-page-content-background'>
        <div className='ride-page-content'>
          <div className='filter-content'>
            Sort By
          </div>
          <div className='rides-content'>
            {isRide && rides.map((ride, index) => (
              <div key={index} className='ride-card' onClick={() => handleRideCardClick(ride)}>
                <div className='ride-detail'>
                  <div className='ride-detail-info'>
                    <div className='ride-detail-info-time'>
                      <div className='ride-detail-info-source-time'>
                        {ride.starttime} 
                      </div>
                      <div className='ride-detail-info-destination-time'>
                        {ride.endtime}
                      </div>
                    </div>
                    <div className='ride-detail-info-travel-line'>
                    </div>
                    <div className='ride-detail-info-place'>
                      <div className='ride-detail-info-source-name'>
                        {ride.source}
                      </div>
                      <div className='ride-detail-info-destination-name'>
                        {ride.dest}
                      </div>
                    </div>
                  </div>
                  <div className='ride-detail-price'>
                    {ride.price}
                  </div>
                </div>
                <div className='person-detail'>
                  {ride.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RidePage;
