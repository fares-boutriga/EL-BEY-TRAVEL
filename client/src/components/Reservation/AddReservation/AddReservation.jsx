import { Button, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rooms from "../Rooms";
import HotelsPrices from "./HotelsPrices";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getRoomData, getRoomPrices } from "../../../features/roomsSlice";
import { setDaysNumber, setReservatioinDate, setTotal } from "../../../features/resrvationSlice";
import {findObjectByType, findPeriodId, sumUsingReduceArrow} from "../../../utils/helper";

function AddReservation() {
  const today = new Date().toISOString().split("T")[0];
  const [category, setCategory] = useState("");
  const [rooms, setRooms] = useState(1);
  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(today);
  const [roomData, setRoomData] = useState([{ nAdult: 1, nKids: 0, kidsAge: [] }]);
  const [location, setLocation] = useState("jerba");
  const [numberDays, setNumberDays] = useState("");
  const [hotels, setHotels] = useState([]);
  const [hotelPrices, setHotelPrices] = useState({});
  const [result,setResult]=useState([])
  const [test,setTest]=useState({})
  const dispatch = useDispatch(); 

  useEffect(() => {
    setNumberDays(calculateNights());
    dispatch(setDaysNumber(calculateNights()))
    dispatch(setReservatioinDate({ checkInDate: checkInDate,checkOutDate: checkOutDate }));
     }, [checkInDate, checkOutDate]);

  // useEffect(() => {
  //   console.log('thi is hte room data',roomData);
  // }, [roomData]);

  const setRoomDataForRoom = (roomNumber, data) => {
    setRoomData(prevRoomData => {
      const updatedRoomData = [...prevRoomData];
      updatedRoomData[roomNumber - 1] = data;
      return updatedRoomData;
    });
  };

  const calculateNights = () => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const differenceInTime = checkOut.getTime() - checkIn.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays;
  };

  const generateRoomsForm = () => {
    if (rooms > 0) {
      return Array.from({ length: rooms }, (_, i) => (
        <Rooms key={i} roomNumber={i + 1} setRoomDataForRoom={setRoomDataForRoom} />
      ));
    }
  };

  const getHotels = () => {
    axios
      .post("http://127.0.0.1:5000/app/hotel/getHotelLocation", {
        location: location,
        checkIn: checkInDate,
        checkout: checkOutDate,
      })
      .then(result => {
        setHotels(result.data);
        // console.log('this is the result', result.data);
        storePrices(result.data);
      })
      .catch(err => {
        console.log("Error fetching hotels:", err);
        // Implement error handling here
      });
  };

  const storePrices = hotels => {
    const prices = hotels.reduce((acc, hotel) => {
      hotel.prices.forEach(price => {
        acc[price.type] = price;
      });
      return acc;
    }, {});
    setHotelPrices(prices);
    };

  const handleSave = () => {
    getHotels();
  };
  const supplement = useSelector(state => state.reservation.supplement);
  // console.log('resfqsdf',theTotal)
  useEffect(() => {
    hotels?.forEach((e,i) => {
      handleRoomsPrice(e.prices, supplement,roomData,e.periods);
    });
    // dispatch(setTotal(result));
    dispatch(setTotal([result[result.length-1]]))
    setResult([])
    dispatch(getRoomData(roomData));
  }, [hotels, supplement,numberDays,roomData]);

  // useEffect(()=>{
  //   console.log('this is the fares',result)
  // },[result])


  const handleRoomsPrice = (arrPrices,supp,roomData,periods) => {
    let roomsPricesByDay={}
    let roomsPrice = {};
    let total=0
    const upresult=[]
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    for (let currentDate = checkIn; currentDate < checkOut; currentDate.setDate(currentDate.getDate() + 1)) {
      const idPeriod = findPeriodId(periods, currentDate.toISOString().split('T')[0]);
      const dayy=`day ${currentDate}`
      for (let i = 0; i < roomData.length; i++) {
        const roomNumber = `room${i + 1}`;
  
        if (roomData[i].nAdult === 1&&supp==='logementSimple') {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'logementSimple',idPeriod)
          // console.log('gares',findObjectByType(arrPrices,'logementSimple',idPeriod),i)
        } else if (roomData[i].nAdult > 1 &&supp==='logementSimple') {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'logementSimple',idPeriod) *2;
        }
        if (roomData[i].nAdult === 1&&supp==="petitDej") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'petitDej',idPeriod)
        } else if (roomData[i].nAdult > 1 &&supp==="petitDej") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'petitDej',idPeriod) *2;
        }
        if (roomData[i].nAdult === 1&&supp==="supplémentVueSurMer") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'supplémentVueSurMer',idPeriod)
        } else if (roomData[i].nAdult > 1 &&supp==="supplémentVueSurMer") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplémentVueSurMer',idPeriod) *2;
        }
        if (roomData[i].nAdult === 1&&supp==="demiePension") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'demiePension',idPeriod)
        } else if (roomData[i].nAdult > 1 &&supp==="demiePension") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'demiePension',idPeriod) *2;
        }
        
        if (roomData[i].nAdult === 1&&supp==="pensionComplete") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'pensionComplete',idPeriod)
        } else if (roomData[i].nAdult > 1 &&supp==="pensionComplete") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'pensionComplete',idPeriod) *2;
        }
        if (roomData[i].nAdult === 1&&supp==="allInSoft") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'allInSoft',idPeriod)
        } else if (roomData[i].nAdult > 1 &&supp==="allInSoft") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'allInSoft',idPeriod) *2;
        }
        if (roomData[i].nAdult === 1&&supp==="allIn") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'allIn',idPeriod)
        } else if (roomData[i].nAdult > 1 &&supp==="allIn") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'allIn',idPeriod) *2;
        }
        if (roomData[i].nAdult === 1&&supp==="supplementSuite") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSingle',idPeriod)+findObjectByType(arrPrices,'supplementSuite',idPeriod)
        } else if (roomData[i].nAdult > 1 &&supp==="supplémentSuite") {
          roomsPrice[roomNumber] = findObjectByType(arrPrices,'supplementSuite',idPeriod) *2;
        }
     
      }  
      roomsPricesByDay[dayy]=roomsPrice
      for (let key in roomsPrice) {
        total += roomsPrice[key];
      }
      
      total = total ;
      // console.log('this is the total', total);
      upresult.push(total)
      setResult(result.push(total))
      console.log('dsqfg,sqsgl,mlq,vlmq,gkblqer,gzrgrgr',roomsPrice)
  }
   
    // console.log("This is the number of adults:", roomData[0].nAdult === 1);
    // console.log("Rooms price:", roomsPrice);
    // console.log("Room data:", roomData);
    dispatch(getRoomData(roomData));
    dispatch(getRoomPrices(roomData));

    // hotels[index].tot=total
    // console.log('this is the result',roomsPricesByDay)
    setTest(sumUsingReduceArrow(result))
    
  };
  return (
    <>
    {/* <Button onClick={console.log(checkInDate)}>bbbbbbbbbbbbbbb</Button> */}
      <Paper
        elevation={3}
        variant="outlined"
        square={false}
        style={{ padding: "20px" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel id="category-label">Catégorie</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={category}
                label="Catégorie"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <MenuItem value={"Trois étoiles"}>Trois étoiles</MenuItem>
                <MenuItem value={"Quatre étoiles"}>Quatre étoiles</MenuItem>
                <MenuItem value={"Cinq étoiles"}>Cinq étoiles</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="adress"
              name="adress"
              label="adress"
              fullWidth
              variant="outlined"
              type="adress"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              value={location}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              required
              id="check-in"
              name="check-in"
              label="Check-in"
              fullWidth
              variant="outlined"
              type="date"
              onChange={(e) => {
                setCheckInDate(e.target.value);
                
              }}
              value={checkInDate}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              required
              id="checkout"
              name="checkout"
              label="Checkout"
              fullWidth
              variant="outlined"
              type="date"
              onChange={(e) => {
                setCheckOutDate(e.target.value);
               
              }}
              value={checkOutDate}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box
              component="div"
              sx={{
                display: "flex",
                border: "2px",
                justifyContent: "center",
                alignItems: "end",
              }}
              className="fars"
            >
              <span style={{ fontSize: "40px" }}>{calculateNights()}</span>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel id="rooms-label">N° chambres</InputLabel>
              <Select
                labelId="rooms-label"
                id="rooms"
                value={rooms}
                label="Nombre de chambres"
                onChange={(e) => {
                  setRooms(e.target.value);
                }}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <MenuItem key={num} value={num}>
                    {num} chambre{num > 1 && "s"}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      <div style={{ marginTop: "20px" }}>{generateRoomsForm()}</div>
      <Grid item xl={12}>
        <Button
          onClick={handleSave}
          style={{ backgroundColor: "green", width: "100%", color: "white" }}
        >
          Rechercher{" "}
        </Button>
      </Grid>
      <HotelsPrices
        rooms={rooms}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        location={location}
        numberDays={numberDays}
        roomData={roomData}
        hotels={hotels}
      />
    </>
  );
}

export default AddReservation;
