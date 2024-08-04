import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { getRoomData } from "../../features/roomsSlice";

function Rooms({ roomNumber, setRoomDataForRoom }) {
  const [nAdult, setNAdult] = useState(1);
  const [nKids, setNKids] = useState(0);
  const [kidsAge, setKidsAge] = useState([]);
  const [baby,setBaby]=useState(false)
  const dispatch=useDispatch()
  // dispatch(getRoomData([{ nAdult, nKids,baby, kidsAge,baby }]))
  const generateKidsAgeInput = () => {
    if (nKids === 0) return null;

    return Array.from({ length: nKids }, (_, i) => (
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
          updateRoomData();
        }}
        value={kidsAge[i] || ""}
        style={{ marginTop: "20px" }}
      />
    ));
  };
  useEffect(() => {
    updateRoomData();
  }, [nAdult,nKids,kidsAge,]);
  const updateRoomData = () => {
    const roomData = {
      nAdult,
      nKids,
      kidsAge,
    };
    setRoomDataForRoom(roomNumber, roomData);
  };
  const handleChange = () => {
    setBaby(!baby);
  };
  return (
    <>
      <Paper
        elevation={3}
        variant="outlined"
        square={false}
        style={{ padding: "20px" }}
      >
        <React.Fragment>
          <h3
            style={{
              backgroundColor: "lightgray",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            chambre {roomNumber}
          </h3>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">N° Adults</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={nAdult}
                  label="Catégorie"
                  onChange={(e) => {
                    setNAdult(e.target.value);
                    updateRoomData();
                  }}
                >
                  <MenuItem value={1}>1 Adulte</MenuItem>
                  <MenuItem value={2}>2 Adultes</MenuItem>
                  <MenuItem value={3}>3 Adultes</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={5}>
              <FormControl fullWidth>
                <InputLabel id="Kids">N° Enfants</InputLabel>
                <Select
                  labelId="Enfants"
                  id="Kids"
                  value={nKids}
                  label="rooms"
                  onChange={(e) => {
                    setNKids((prevNKids) => e.target.value);
                    updateRoomData();
                  }}
                >
                  <MenuItem value={0}>0 enfant </MenuItem>
                  <MenuItem value={1}>Un enfant </MenuItem>
                  <MenuItem value={2}>Deux enfants </MenuItem>
                  <MenuItem value={3}>Trois enfants </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Checkbox
                checked={baby}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
                label="Secondsdfdary"
              />
              <span>Bébé</span>
            </Grid>
            <Grid item xs={12}>
              {nKids > 0 && (
                <InputLabel id="kidsAge">Âge d'enfant(s)</InputLabel>
              )}
              {generateKidsAgeInput()}
            </Grid>
          </Grid>
        </React.Fragment>
      </Paper>
    </>
  );
}

export default Rooms;
