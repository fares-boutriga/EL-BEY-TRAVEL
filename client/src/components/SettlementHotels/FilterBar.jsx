import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, MenuItem, Select, Button, Divider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilterForm } from '../../features/filterSlices';
import DateFilter from './components/DateFilter';

function FilterBar({ toggleDrawer }) {
  const [dates, setDates] = useState({ startDate: '', endDate: '',today:false });
  const [payment, setPayment] = useState('');
  const [credit, setCredit] = useState(false);
  const dispatch = useDispatch();

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleCreditToggle = () => {
    setCredit((prevCredit) => !prevCredit);
  };

  const handleFormSubmit = () => {
    dispatch(setFilterForm({ ...dates, payedHotel:payment, credit }));
    toggleDrawer(false); // Close the modal
  };

  return (
    <Box sx={{ width:400, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ flex: '1 1 auto', overflowY: 'auto', padding: 2 }}>
        <DateFilter setDates={setDates} dates={dates} />
        <Divider />
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="payment-select-label">Règlement</InputLabel>
          <Select
            labelId="payment-select-label"
            id="payment-select"
            value={payment}
            label="Règlement"
            onChange={handlePaymentChange}
          >
            <MenuItem value={true}>Payée</MenuItem>
            <MenuItem value={false}>Non payée</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" color={credit ? 'secondary' : 'primary'} onClick={handleCreditToggle} sx={{ mt: 2 }}>
          Crédit client
        </Button>
      </Box>

      <Button variant="contained" color="primary" onClick={handleFormSubmit} sx={{ marginBottom: 2 }}>
        Soumettre
      </Button>
    </Box>
  );
}

export default FilterBar;
