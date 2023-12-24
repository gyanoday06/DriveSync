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
            <div className='sort-sections'>
              <div className='sort-section-header'>
                <div className='sort-section-header-text'>
                  Sort by
                </div>
                <div className='sort-section-header-text'>
                  Clear all
                </div>
              </div>
              <div className='sort-section-content'>
                <div className='sort-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    Earliest Departure
                  </div>
                  <div className='sort-section-content-checkbox'>
                    <input type="checkbox" id="earliestDeparture" />
                    <label htmlFor="earliestDeparture"></label>
                  </div>
                </div>
                <div className='sort-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    Lowest Price
                  </div>
                  <div className='sort-section-content-checkbox'>
                    <input type="checkbox" id="lowestPrice" />
                    <label htmlFor="lowestPrice"></label>
                  </div>
                </div>
                <div className='sort-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    Shortest Ride
                  </div>
                  <div className='sort-section-content-checkbox'>
                    <input type="checkbox" id="shortestRide" />
                    <label htmlFor="shortestRide"></label>
                  </div>
                </div>
                <div className='sort-section-content-footer'>
                </div>
              </div>
            </div>
            <div className='time-sections'>
              <div className='time-section-header'>
                <div className='time-section-header-text'>
                  Departure Time
                </div>
              </div>
              <div className='time-section-content'>
                <div className='time-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    Before 06:00
                  </div>
                  <div className='sort-section-content-checkbox'>
                    <input type="checkbox" id="beforeSix" />
                    <label htmlFor="earliestDeparture"></label>
                  </div>
                </div>
                <div className='time-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    06:00 - 12:00
                  </div>
                  <div className='sort-section-content-checkbox'>
                    <input type="checkbox" id="sixToTwelve" />
                    <label htmlFor="lowestPrice"></label>
                  </div>
                </div>
                <div className='time-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    12:01 - 18:00
                  </div>
                  <div className='sort-section-content-checkbox'>
                    <input type="checkbox" id="twelveToEighteen" />
                    <label htmlFor="shortestRide"></label>
                  </div>
                </div>
                <div className='time-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    After 18:00
                  </div>
                  <div className='sort-section-content-checkbox'>
                    <input type="checkbox" id="afterEighteen" />
                    <label htmlFor="shortestRide"></label>
                  </div>
                </div>
                <div className='sort-section-content-footer'>
                </div>
              </div>
            </div>
            <div className='amenities-sections'>
              <div className='amenities-section-header'>
                <div className='time-section-header-text'>
                  Amenities
                </div>
              </div>
              <div className='amenities-section-content'>
                <div className='amenities-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    Smoking allowed
                  </div>
                  <div className='sort-section-content-checkbox'>
                    <input type="checkbox" id="smokingAllowed" />
                    <label htmlFor="earliestDeparture"></label>
                  </div>
                </div>
                <div className='amenities-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    Alcohol allowed
                  </div>
                  <div className='sort-section-content-checkbox'>
                    <input type="checkbox" id="alcoholAllowed" />
                    <label htmlFor="lowestPrice"></label>
                  </div>
                </div>
              </div>
            </div>
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
