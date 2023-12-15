// PublishCard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PublishCard.css';

const PublishCard = () => {
   const [source, setSource] = useState('');
   const [destination, setDestination] = useState('');
   const [time, setTime] = useState('');
   const [date, setDate] = useState(new Date()); // Set initial date to today
   const [passengers, setPassengers] = useState(1);
   const [isCigarettesAllowed, setIsCigarettesAllowed] = useState(false);
   const [isAlcoholAllowed, setIsAlcoholAllowed] = useState(false);
   const [taxiNumber, setTaxiNumber] = useState('');
   const [whatsappLink, setWhatsappLink] = useState('');
   const [description, setDescription] = useState('');
   const [dateError, setDateError] = useState('');

   const handlePassengersChange = (value) => {
      if (value >= 1) {
         setPassengers(value);
      }
   };

   const handleDateChange = (newDate) => {
      const currentDate = new Date();
      if (newDate >= currentDate) {
         setDate(newDate);
         setDateError('');
      } else {
         setDateError('Please select a date from today onwards.');
      }
   };

   const handleCreateClick = () => {
      if (!date) {
         setDateError('Please select a date.');
      } else {
         // Perform the create action
         // You can navigate to the ride page or perform other actions here
         console.log('Create clicked');
      }
   };

   return (
      <div className='card-container'>
         <div className="pool-ride-content-outside">
            <div className="pool-ride-content">
               <div className='pool-ride-inside-content'>
                  <input
                     type="text"
                     id="source"
                     value={source}
                     placeholder="Enter source"
                     onChange={(e) => setSource(e.target.value)}
                  />
               </div>
               <div className='pool-ride-inside-content'>
                  <input
                     type="text"
                     id="destination"
                     value={destination}
                     placeholder="Enter destination"
                     onChange={(e) => setDestination(e.target.value)}
                  />
               </div>
            </div>
            <div className="pool-ride-content">
               <div className='pool-ride-inside-content' id='timeAndDate'>
                  <input
                     type="text"
                     id="time"
                     value={time}
                     placeholder="Enter time"
                     onChange={(e) => setTime(e.target.value)}
                  />
                  <div id='datepicker'>
                     <DatePicker
                        selected={date}
                        onChange={(newDate) => handleDateChange(newDate)}
                        placeholderText="Select a date"
                        dateFormat="dd/MM/yyyy"
                        customInput={<input />}
                        minDate={new Date()} // Set minimum selectable date to today
                        className="custom-datepicker"
                     />
                  </div>
                  <input
                     type="number"
                     id="passengers"
                     value={passengers}
                     placeholder="Enter number of passengers"
                     onChange={(e) => handlePassengersChange(parseInt(e.target.value, 10))}
                  />
               </div>
               <div className='pool-ride-inside-content-checkboxes'>
                  <div className='checkbox-layout'>
                     <label htmlFor="cigarettes">Cigarettes</label>
                     <input
                        type="checkbox"
                        id="cigarettes"
                        checked={isCigarettesAllowed}
                        onChange={() => setIsCigarettesAllowed(!isCigarettesAllowed)}
                     />
                  </div>
                  <div className='checkbox-layout'>
                     <label htmlFor="alcohol">Alcohol</label>
                     <input
                        type="checkbox"
                        id="alcohol"
                        checked={isAlcoholAllowed}
                        onChange={() => setIsAlcoholAllowed(!isAlcoholAllowed)}
                     />
                  </div>
               </div>
            </div>
            <div className="pool-ride-content">
               <div className='pool-ride-inside-content'>
                  <input
                     type="text"
                     id="taxiNumber"
                     value={taxiNumber}
                     placeholder="Enter taxi number"
                     onChange={(e) => setTaxiNumber(e.target.value)}
                  />
               </div>
               <div className='pool-ride-inside-content'>
                  <input
                     type="text"
                     id="whatsappLink"
                     value={whatsappLink}
                     placeholder="Enter WhatsApp link"
                     onChange={(e) => setWhatsappLink(e.target.value)}
                  />
               </div>
            </div>
            <div className="pool-ride-content">
               <div className='pool-ride-inside-content-description'>
                  <input
                     type="text"
                     id="passengers"
                     value={description}
                     placeholder="Description"
                     onChange={(e) => setDescription(e.target.value)}
                  />
               </div>
            </div>
         </div>
         <div className="pool-ride-submit-section">
            <button onClick={handleCreateClick} className="pool-submit-button">
               Create
            </button>
         </div>
      </div>
   );
};

export default PublishCard;
