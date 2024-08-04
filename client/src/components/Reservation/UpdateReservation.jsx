import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import hooks from react-redux
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Grid from '@mui/material/Grid'; // Import Grid from MUI
import { setSupplement, setTotalAmount } from '../../features/resrvationSlice';
import { Typography, Box, CircularProgress } from '@mui/material';
import {findObjectByType, handleRoomsPrice} from '../../utils/helper';
import { useEffect,useState } from 'react';
import BookingForm from './BokkingForm';
import ClientForm from './ClientForm';

export default function UpdateReservation() {
  const dispatch = useDispatch(); // Get the dispatch function from useDispatch
  const supplement = useSelector(state => state.reservation.supplement); // Get the supplement state from Redux
  const roomData = useSelector(state => state.roomData.values); 

  const handleSupplementChange = (event) => {
    dispatch(setSupplement(event.target.value)); // Dispatch the setSupplement action to update the supplement state in Redux
  };
  const reservation = useSelector((state) => state.reservation);
  const totalAmount = useSelector((state) => state.reservation.totalAmount);
  const daysNumber = useSelector((state) => state.reservation.daysNumber);
  const theHotel=    useSelector((state) =>state.hotel.theHotel)
  const checkInDate = useSelector((state) => state.reservation.reservationDate.checkInDate);
  const checkOutDate = useSelector((state) => state.reservation.reservationDate.checkOutDate);
  useEffect(() => {
    dispatch(setTotalAmount(handleRoomsPrice(theHotel.prices, supplement,roomData,theHotel.periods,checkInDate,checkOutDate,theHotel.RoomPromtonts)))
     
  }, [theHotel, supplement,daysNumber,roomData]);


  return (
   theHotel?(
    <Box>
    <Sheet
      sx={{
        background: 'transparent',
        pl: 4,
        borderLeft: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography
        level="body-sm"
        fontWeight="xl"
        id="variant-label"
        textColor="text.primary"
        mb={1}
      >
        Variant:
      </Typography>
      <RadioGroup
        size="sm"
        aria-labelledby="variant-label"
        name="variant"
        value={supplement} // Use the supplement state from Redux
        onChange={handleSupplementChange} // Use the handleSupplementChange function to update the supplement state
      >
        <Grid container spacing={0}> {/* Minimize gap in Grid container */}
          <Grid item xs={12} sm={6} md={4}>
            <Radio label="logementSimple" value="logementSimple" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Radio label="petitDej" value="petitDej" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Radio label="demiePension" value="demiePension" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Radio label="pensionComplete" value="pensionComplete" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Radio label="allInSoft" value="allInSoft" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Radio label="allIn" value="allIn" />
          </Grid>
     
          <Grid item xs={12} sm={6} md={4}>
            <Radio label="supplementVueSurMer" value="supplementVueSurMer" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Radio label="supplementSuite" value="supplementSuite" />
          </Grid>
        </Grid>
      </RadioGroup>
    </Sheet>
    <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: '4px', mt: 2 ,backgroundColor:'gray'}}>
    <Typography variant="h6" gutterBottom>
      Reservation Information
    </Typography>
    <Typography variant="body1">Total: {handleRoomsPrice(theHotel.prices, supplement,roomData,theHotel.periods,checkInDate,checkOutDate,theHotel.RoomPromtonts)}</Typography>
    {/* <Typography variant="body1">Supplement: {reservation.supplement}</Typography> */}
    {/* Add more reservation details here as needed */}
      <BookingForm/>
  </Box>
      <ClientForm/>
  </Box>
   ):(<CircularProgress />
   )
  );
}
