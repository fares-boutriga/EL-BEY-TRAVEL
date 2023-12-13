import React, { useState } from 'react';
import './HotelDetails.css'
function HotelDetails() {
  // Get today's date in the format YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];

  // Initialize state for check-in and check-out dates
  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(today);
  const [numberOfNights, setNumberOfNights] = useState(1);

  // Calculate the number of nights
  const calculateNights = () => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    // Calculate the difference in milliseconds
    const differenceInTime = checkOut.getTime() - checkIn.getTime();

    // Calculate the difference in days
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays;
  };

  return (
    <div className="Hotel">
      <div className='hotel-search' >
        <input type="text" className='search' placeholder="ajouter le nom d'hôtel" />
        <br />
        <div className='date'>
            <div>
                 <span className="input-item">
          <i className="fa fa-user-circle">Du  </i>
        </span>
        <input
          className="form-input"
          id="check-in"
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          required
        />
            </div>
       <div>
         <span className="input-item" >
          <i className="fa fa-key">Au  </i>
        </span>
        <input
          className="form-input"
          type="date"
          id="check-up"
          name="password"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          required
        />
        </div>
       </div>
        
       
        
         <div >
        <p>nombre des jour {calculateNights()}</p>
        <div>
           <p>nombre des Chombres: </p>
        <select name="Chombres" class="ipt-select" required>
					<option label="1" value="1" selected="selected">1</option>
					<option label="2" value="2">2</option>
					<option label="3" value="3">3</option>
					<option label="4" value="4">4</option>
					<option label="5" value="5">5</option>
					<option label="6" value="6">6</option>
					<option label="7" value="7">7</option>
					<option label="8" value="8">8</option>
					<option label="9" value="9">9</option>
				</select>  
        </div>
     
      </div>
      </div>
      
     
      <div className='clien-input'>
        <p>Chambre N</p>
        <div>
        <label>Adults</label>
				<select name="Adults" class="ipt-select" required>
					<option label="1" value="1">1</option>
					<option label="2" value="2" selected="selected">2</option>
					<option label="3" value="3">3</option>
					<option label="4" value="4">4</option>
					<option label="5" value="5">5</option>
					<option label="6" value="6">6</option>
					<option label="7" value="7">7</option>
					<option label="8" value="8">8</option>
					<option label="9" value="9">9</option>
				</select>
        </div>
        
        <div>
        <span>Enfants</span>
				<select name="Enfants" class="ipt-select" required>
					<option label="0" value="0" selected="selected">0</option>
					<option label="1" value="1">1</option>
					<option label="2" value="2">2</option>
					<option label="3" value="3">3</option>
					<option label="4" value="4">4</option>
					<option label="5" value="5">5</option>
					<option label="6" value="6">6</option>
					<option label="7" value="7">7</option>
					<option label="8" value="8">8</option>
					<option label="9" value="9">9</option>
				</select>
        </div>
        
        <div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> bébé</label><br/>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> Deux leit  </label><br/>
      </div>    
        </div>

 <button>Enregistrer</button>
</div>
  );
}

export default HotelDetails;
