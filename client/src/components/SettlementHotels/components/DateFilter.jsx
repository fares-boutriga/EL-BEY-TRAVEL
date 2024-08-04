import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Grid, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilterForm } from '../../../features/filterSlices';
import { subWeeks, subMonths, format } from 'date-fns';

export default function DateFilter({setDates,dates}) {
useEffect(()=>{console.log(dates)},[dates])
  const handleChange = (dateType, dateValue) => {
    setDates((prevDates) => ({
      ...prevDates,
      [dateType]: dateValue,
    }));
  };

  const handleToday = () => {
    const endDate = new Date();
    const startDate = new Date();
    setDates({ startDate: format(startDate, 'yyyy-MM-dd'), endDate: format(endDate, 'yyyy-MM-dd') });
  };
  const handleLastWeek = () => {
    const endDate = new Date();
    const startDate = subWeeks(endDate, 1);
    setDates({ startDate: format(startDate, 'yyyy-MM-dd'), endDate: format(endDate, 'yyyy-MM-dd') });
  };

  const handleLastMonth = () => {
    const endDate = new Date();
    const startDate = subMonths(endDate, 1);
    setDates({ startDate: format(startDate, 'yyyy-MM-dd'), endDate: format(endDate, 'yyyy-MM-dd') });
  };

  // useEffect(() => {
  //   dispatch(setFilterForm(dates.startDate, dates.endDate));
  // }, [dates.startDate, dates.endDate, dispatch]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Sélectionnez une période
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="startDate"
            name="startDate"
            label="Début"
            fullWidth
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => handleChange('startDate', e.target.value)}
            value={dates.startDate}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="endDate"
            name="endDate"
            label="Fin"
            fullWidth
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => handleChange('endDate', e.target.value)}
            value={dates.endDate}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleLastWeek} sx={{ mr: 2 }}>
            Dernière semaine
          </Button>
          <Button variant="contained" color="primary" onClick={handleLastMonth}>
            Dernier mois
          </Button>
        </Grid>
      </Grid>
        <Button style={{marginLeft:'30%',marginTop:"15px",marginBottom:"15px"}} variant="contained" color="primary" onClick={handleToday}>Aujourd'hui</Button>
    </>
  );
}
