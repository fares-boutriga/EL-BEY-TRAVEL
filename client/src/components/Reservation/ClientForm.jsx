import React, { useState, useRef } from 'react';
import { Button, TextField, FormControl, FormLabel, Select, MenuItem, IconButton, InputAdornment } from '@mui/material';
import { ErrorOutlineOutlined as ErrorIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function ClientForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const nameError = useRef(false);
  const numberError = useRef(false);
  const navigate=useNavigate()
  const phoneCodes = [
    { value: '+216', label: 'Tunisie (+216)' },
    { value: '+213', label: 'Algérie (+213)' },
    { value: '+218', label: 'Libye (+218)' },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        nameError.current = value.trim() === ''; // Check for empty name
        break;
      case 'number':
        setNumber(value);
        // Updated phone number validation
        numberError.current = !/^\d{8}$/.test(value.replace(/[^\d]/g, '')); // Check for 10-digit number
        break;
      case 'countryCode':
        setCountryCode(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nameError.current && !numberError.current) {
      console.log('Nom du client:', name);
      console.log('Numéro de téléphone:', number);
      console.log('Indicatif téléphonique:', countryCode);
      // Submit form data to backend
    } else {
      console.error('Validation errors in the form');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth margin="normal" error={nameError.current}>
        <FormLabel htmlFor="name">Nom du client</FormLabel>
        <TextField
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          required
          error={nameError.current}
          helperText={nameError.current ? "Le nom du client est requis" : ''}
        />
        {nameError.current && (
          <IconButton aria-label="error" size="small">
            <ErrorIcon />
          </IconButton>
        )}
      </FormControl>
      <FormControl fullWidth margin="normal" error={numberError.current}>
        <FormLabel htmlFor="number">Numéro de téléphone</FormLabel>
        <div style={{ display: 'flex' }}>
        <Select
  labelId="country-code-label"
  id="country-code"
  value={countryCode}
  onChange={(event) => handleChange({ target: { name: 'countryCode', value: event.target.value } })}
  required
  aria-labelledby="country-code-label"
>
  {phoneCodes.map((code) => (
    <MenuItem key={code.value} value={code.value}>
      {code.label}
    </MenuItem>
  ))}
</Select>
          <TextField
            id="number"
            name="number"
            label="Numéro de téléphone"
            type="tel"
            value={number}
            onChange={handleChange}
            required
            error={numberError.current}
            helperText={numberError.current ? "Le numéro doit contenir 8 chiffres" : ''}
          />
          {numberError.current && (
            <IconButton aria-label="error" size="small">
              <ErrorIcon />
            </IconButton>
          )}
        </div>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" onClick={()=>{navigate('/print')}}>
        Soumettre
      </Button>
    </form>
  );
}

export default ClientForm;
