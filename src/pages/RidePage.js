import React, { useState, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import './RidePage.css';

const RidePage = () => {
  const [isRide, setIsRide] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState({
    earliestDeparture: false,
    lowestPrice: false,
    shortestRide: false,
    beforeSix: false,
    sixToTwelve: false,
    twelveToEighteen: false,
    afterEighteen: false,
    smokingAllowed: false,
    alcoholAllowed: false,
  });
  const rides = [
    { price: '25$', source: 'Vellore', dest: 'Chennai', name: 'John Doe', starttime: 500, endtime: 220, carname: 'Toyota Camry', smokingAllowed: false, alcoholAllowed: false },
    { price: '40$', source: 'Vellore', dest: 'Chennai', name: 'Alice Smith', starttime: 480, endtime: 210, carname: 'Honda Accord', smokingAllowed: true, alcoholAllowed: true },
    { price: '35$', source: 'Vellore', dest: 'Chennai', name: 'Bob Johnson', starttime: 510, endtime: 230, carname: 'Ford Mustang', smokingAllowed: false, alcoholAllowed: false },
    { price: '50$', source: 'Vellore', dest: 'Chennai', name: 'Eva Brown', starttime: 470, endtime: 200, carname: 'Chevrolet Cruze', smokingAllowed: true, alcoholAllowed: false },
    { price: '30$', source: 'Vellore', dest: 'Chennai', name: 'David Wilson', starttime: 490, endtime: 215, carname: 'Nissan Altima', smokingAllowed: false, alcoholAllowed: true },
    { price: '45$', source: 'Vellore', dest: 'Chennai', name: 'Sophia Davis', starttime: 460, endtime: 190, carname: 'Hyundai Sonata', smokingAllowed: false, alcoholAllowed: false },
    { price: '55$', source: 'Vellore', dest: 'Chennai', name: 'Mia Martinez', starttime: 530, endtime: 240, carname: 'Volkswagen Passat', smokingAllowed: false, alcoholAllowed: true },
    { price: '38$', source: 'Vellore', dest: 'Chennai', name: 'Oliver Taylor', starttime: 500, endtime: 220, carname: 'Kia Optima', smokingAllowed: true, alcoholAllowed: false },
    { price: '42$', source: 'Vellore', dest: 'Chennai', name: 'Charlotte Anderson', starttime: 490, endtime: 215, carname: 'Mazda 6', smokingAllowed: false, alcoholAllowed: false },
    { price: '48$', source: 'Vellore', dest: 'Chennai', name: 'Liam Thomas', starttime: 480, endtime: 210, carname: 'Subaru Legacy', smokingAllowed: true, alcoholAllowed: false },
  ];
  useEffect(() => {
    if (rides.length === 0) {
      setIsRide(false);
    }
  }, [isRide]);

  const handleRideCardClick = (ride) => {
    console.log('Ride card clicked:', ride);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const handleClearAllFilters = () => {
    setSelectedFilters({
      earliestDeparture: false,
      lowestPrice: false,
      shortestRide: false,
      beforeSix: false,
      sixToTwelve: false,
      twelveToEighteen: false,
      afterEighteen: false,
      smokingAllowed: false,
      alcoholAllowed: false,
    });
  };

  const filterRides = () => {
    let filteredRides = [...rides];

    // Sort by selected criteria
    if (selectedFilters.earliestDeparture) {
      filteredRides.sort((a, b) => a.starttime - b.starttime);
    }
    if (selectedFilters.lowestPrice) {
      filteredRides.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }
    if (selectedFilters.shortestRide) {
      filteredRides.sort((a, b) => a.endtime - a.starttime - (b.endtime - b.starttime));
    }

    // Filter by selected time sections
    if (selectedFilters.beforeSix) {
      filteredRides = filteredRides.filter((ride) => ride.starttime < 360); // 360 represents 6:00 AM in minutes
    }
    if (selectedFilters.sixToTwelve) {
      filteredRides = filteredRides.filter((ride) => ride.starttime >= 360 && ride.starttime < 720);
    }
    if (selectedFilters.twelveToEighteen) {
      filteredRides = filteredRides.filter((ride) => ride.starttime >= 720 && ride.starttime < 1080);
    }
    if (selectedFilters.afterEighteen) {
      filteredRides = filteredRides.filter((ride) => ride.starttime >= 1080);
    }

    // Filter by amenities
    if (selectedFilters.smokingAllowed) {
      filteredRides = filteredRides.filter((ride) => ride.smokingAllowed);
    }
    if (selectedFilters.alcoholAllowed) {
      filteredRides = filteredRides.filter((ride) => ride.alcoholAllowed);
    }

    return filteredRides;
  };

  const filteredRides = filterRides();

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
                <div className='sort-section-header-text' onClick={handleClearAllFilters}>
                  Clear all
                </div>
              </div>
              <div className='sort-section-content'>
                <div className='sort-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    Earliest Departure
                  </div>
                  <div className='sort-section-content-checkbox'>
                    <input
                      type="checkbox"
                      id="earliestDeparture"
                      checked={selectedFilters.earliestDeparture}
                      onChange={() => handleFilterChange('earliestDeparture')} />
                    <label htmlFor="earliestDeparture"></label>
                  </div>
                </div>
                <div className='sort-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    Lowest Price
                  </div>
                  <div className='sort-section-content-checkbox'>
                    <input type="checkbox"
                      id="lowestPrice"
                      checked={selectedFilters.lowestPrice}
                      onChange={() => handleFilterChange('lowestPrice')} />
                    <label htmlFor="lowestPrice"></label>
                  </div>
                </div>
                <div className='sort-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    Shortest Ride
                  </div>
                  <div className='sort-section-content-checkbox'>
                    <input type="checkbox"
                      id="shortestRide"
                      checked={selectedFilters.shortestRide}
                      onChange={() => handleFilterChange('shortestRide')} />
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
                  <div className='time-section-content-checkbox'>
                    <input type="checkbox"
                      id="beforeSix"
                      checked={selectedFilters.beforeSix}
                      onChange={() => handleFilterChange('beforeSix')} />
                    <label htmlFor="beforeSix"></label>
                  </div>
                </div>
                <div className='time-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    06:00 - 12:00
                  </div>
                  <div className='time-section-content-checkbox'>
                    <input type="checkbox"
                      id="sixToTwelve"
                      checked={selectedFilters.sixToTwelve}
                      onChange={() => handleFilterChange('sixToTwelve')} />
                    <label htmlFor="sixToTwelve"></label>
                  </div>
                </div>
                <div className='time-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    12:01 - 18:00
                  </div>
                  <div className='time-section-content-checkbox'>
                    <input type="checkbox"
                      id="twelveToEighteen"
                      checked={selectedFilters.twelveToEighteen}
                      onChange={() => handleFilterChange('twelveToEighteen')} />
                    <label htmlFor="twelveToEighteen"></label>
                  </div>
                </div>
                <div className='time-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    After 18:00
                  </div>
                  <div className='time-section-content-checkbox'>
                    <input type="checkbox"
                      id="afterEighteen"
                      checked={selectedFilters.afterEighteen}
                      onChange={() => handleFilterChange('afterEighteen')} />
                    <label htmlFor="afterEighteen"></label>
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
                  <div className='amenities-section-content-checkbox'>
                    <input type="checkbox"
                      id="smokingAllowed"
                      checked={selectedFilters.smokingAllowed}
                      onChange={() => handleFilterChange('smokingAllowed')} />
                    <label htmlFor="smokingAllowed"></label>
                  </div>
                </div>
                <div className='amenities-section-content-card'>
                  <div className='sort-section-content-card-text'>
                    Alcohol allowed
                  </div>
                  <div className='amenities-section-content-checkbox'>
                    <input type="checkbox"
                      id="alcoholAllowed"
                      checked={selectedFilters.alcoholAllowed}
                      onChange={() => handleFilterChange('alcoholAllowed')} />
                    <label htmlFor="alcoholAllowed"></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='rides-content'>
            {isRide && filteredRides.map((ride, index) => (
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
            {!isRide && (
              <div className='no-ride'>
                <div className='no-ride-text'>
                  There are no rides yet between
                </div>
                <div className='no-ride-text'>
                  these cities. Explore later
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RidePage;
