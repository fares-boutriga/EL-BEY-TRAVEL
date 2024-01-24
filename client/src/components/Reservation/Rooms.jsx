import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Rooms({ roomNumber,setRoomDataForRoom }) {
  const [nAdult, setNAdult] = useState(1);
  const [nKids, setNKids] = useState(0);
  const [kidsAge, setKidsAge] = useState([]);


 // Rooms component
const generateKidsAgeInput = (setRoomDataForRoom) => {
  const result = [];
  for (let i = 0; i < nKids; i++) {
    result.push(
      <TextField
        key={i}
        required
        id={`kidsAge-${i}`}
        name={`kidsAge-${i}`}
        label={`Age ${i + 1}`}
        fullWidth
        variant="outlined"
        type="number"
        onChange={(e) => {
          const updatedKidsAge = [...kidsAge];
          updatedKidsAge[i] = e.target.value;
          setKidsAge(updatedKidsAge);
          const roomData = {
            nAdult,
            nKids,
            kidsAge: updatedKidsAge,
          };
          setRoomDataForRoom(roomNumber, roomData);
        }}
        value={kidsAge[i] || ''}
        style={{ marginTop: '20px' }}
      />
    );
  }
  return result;
};


  return (
    <>
      <Paper elevation={3} variant="outlined" square={false} style={{ padding: '20px' }}>
        <React.Fragment>
          <h3 style={{backgroundColor:'grey',padding:'5px',borderRadius:'10px'}}>chambre {roomNumber}</h3>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">N° Adults</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={nAdult}
                  label="Catégorie"
                  onChange={(e) => {
                    setNAdult(e.target.value);
                  }}
                >
                  <MenuItem value={1}>1 Adulte</MenuItem>
                  <MenuItem value={2}>2 Adultes</MenuItem>
                  <MenuItem value={3}>3 Adultes</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="Kids">N° Enfants</InputLabel>
                <Select
                  labelId="Enfants"
                  id="Kids"
                  value={nKids}
                  label="rooms"
                  onChange={(e) => {
                    setNKids(e.target.value);
                    setKidsAge([]); // Reset kidsAge array when the number of kids changes
                  }}
                >
                  <MenuItem value={0}>0 enfant </MenuItem>
                  <MenuItem value={1}>Un enfant </MenuItem>
                  <MenuItem value={2}>Deux enfants </MenuItem>
                  <MenuItem value={3}>Trois enfants </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              {nKids>0&& <InputLabel id="kidsAge">Âge d'enfant(s)</InputLabel>}
              {generateKidsAgeInput(setRoomDataForRoom)}
            </Grid>
          </Grid>
        </React.Fragment>
      </Paper>
    </>
  );
}

export default Rooms;
