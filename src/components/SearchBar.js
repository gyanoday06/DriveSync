import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchBar.css';

const SearchBar = () => {
  const [destination, setDestination] = useState('');
  const [source, setSource] = useState('');
  const [date, setDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);
  
  const navigate = useNavigate();

  const handleSearch = () => {
    if(source && destination){
      navigate('/ridepage');
    }
  };

  const handlePassengerChange = (e) => {
    const newPassengers = Math.max(1, parseInt(e.target.value, 10) || 0);
    setPassengers(newPassengers);
  };

  const CustomDatePickerInput = ({ value, onClick }) => (
    <input
      type="text"
      placeholder="Today"
      value={value}
      onClick={onClick}
      readOnly
    />
  );

  return (
    <div className="travel-search-bar">
      <div className="search-input">
        <input
          type="text"
          placeholder="Leaving From..."
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
      </div>
      <div className="search-input">
        <input
          type="text"
          placeholder="Going To..."
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="search-input">
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          minDate={new Date()} 
          dateFormat="MMMM d, yyyy" 
          placeholderText="Today" 
          customInput={<CustomDatePickerInput />}
        />
      </div>
      <div className="search-input">
        <input
          type="number"
          placeholder="Travellers"
          value={passengers}
          onChange={handlePassengerChange}
        />
      </div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
