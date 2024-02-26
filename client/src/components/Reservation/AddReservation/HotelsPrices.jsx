import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import hotelImage from "../../../assets/hotel.png";
import { Rating } from "@mui/material";
import {getRoomData, getRoomPrices} from '../../../features/roomsSlice'
import { useDispatch, useSelector } from "react-redux";
import { setTotal } from "../../../features/resrvationSlice";

function HotelsPrices({
  checkInDate,
  checkOutDate,
  numberDays,
  roomData,
  hotels,
}) {
  const { values} = useSelector((state) => state.roomData);
  const supplement = useSelector(state => state.reservation.supplement);
  const total = useSelector(state => state.reservation.total);

  const dispatch = useDispatch(); 

  useEffect(() => {
    hotels?.forEach((e) => {
      handleRoomsPrice(e.prices, supplement);
    });
  }, [hotels, supplement,numberDays,roomData]);

  function findObjectByType(arr, type) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === type) {
            return arr[i].price;
        }
    }
    return null; // Return null if no match is found
}

  const handleRoomsPrice = (arr,supp) => {
    let roomsPrice = {};
    let total=0
    for (let i = 0; i < roomData.length; i++) {
      const roomNumber = `room${i + 1}`;

      if (roomData[i].nAdult === 1&&supp==='logementSimple') {
        roomsPrice[roomNumber] = findObjectByType(arr,'supplementSingle')+findObjectByType(arr,'logementSimple')
      } else if (roomData[i].nAdult > 1 &&supp==='logementSimple') {
        roomsPrice[roomNumber] = findObjectByType(arr,'logementSimple') *2;
      }
      if (roomData[i].nAdult === 1&&supp==="petitDej") {
        roomsPrice[roomNumber] = arr[4].price+arr[1].price
      } else if (roomData[i].nAdult > 1 &&supp==="petitDej") {
        roomsPrice[roomNumber] = arr[1].price *2;
      }
      if (roomData[i].nAdult === 1&&supp==="supplémentVueSurMer") {
        roomsPrice[roomNumber] = arr[4].price+arr[2].price
      } else if (roomData[i].nAdult > 1 &&supp==="supplémentVueSurMer") {
        roomsPrice[roomNumber] = arr[2].price *2;
      }
      if (roomData[i].nAdult === 1&&supp==="demiePension") {
        roomsPrice[roomNumber] = arr[4].price+arr[3].price
      } else if (roomData[i].nAdult > 1 &&supp==="demiePension") {
        roomsPrice[roomNumber] = arr[3].price *2;
      }
      if (roomData[i].nAdult === 1&&supp==="demiePension") {
        roomsPrice[roomNumber] = arr[4].price+arr[3].price
      } else if (roomData[i].nAdult > 1 &&supp==="demiePension") {
        roomsPrice[roomNumber] = arr[3].price *2;
      }
      if (roomData[i].nAdult === 1&&supp==="pensionComplete") {
        roomsPrice[roomNumber] = arr[4].price+arr[5].price
      } else if (roomData[i].nAdult > 1 &&supp==="pensionComplete") {
        roomsPrice[roomNumber] = arr[5].price *2;
      }
      if (roomData[i].nAdult === 1&&supp==="allInSoft") {
        roomsPrice[roomNumber] = arr[4].price+arr[6].price
      } else if (roomData[i].nAdult > 1 &&supp==="allInSoft") {
        roomsPrice[roomNumber] = arr[6].price *2;
      }
      if (roomData[i].nAdult === 1&&supp==="allIn") {
        roomsPrice[roomNumber] = arr[4].price+arr[7].price
      } else if (roomData[i].nAdult > 1 &&supp==="allIn") {
        roomsPrice[roomNumber] = arr[7].price *2;
      }
      if (roomData[i].nAdult === 1&&supp==="supplementSuite") {
        roomsPrice[roomNumber] = arr[4].price+arr[8].price
      } else if (roomData[i].nAdult > 1 &&supp==="supplémentSuite") {
        roomsPrice[roomNumber] = arr[8].price *2;
      }
    }
  
    console.log("This is the number of adults:", roomData[0].nAdult === 1);
    console.log("Rooms price:", roomsPrice);
    console.log("Room data:", roomData);
    dispatch(getRoomData(roomData));
    dispatch(getRoomPrices(roomData));
    for(let key in roomsPrice ){
      total +=roomsPrice[key]
    }
    console.log('this is the total',total * numberDays)
    dispatch(setTotal(total*numberDays ))
    return total * numberDays
  };

  return (
    <>
      {hotels?.map((e) => (
        <Box
          key={e.id}
          sx={{
            width: "100%",
            position: "relative",
            overflow: { xs: "auto", sm: "initial" },
          }}
        >
          <button onClick={() => handleRoomsPrice(e.prices)}>Rooms</button>
          <button onClick={() => console.log(values)}>Rooms12</button>
          {/* <button onClick={()=>console.log(e.prices)}>prices</button> */}
          {/* <span>the id of the price of supplémentSingle est {getIdOfPiceByType(e.price,'supplémentSingle')}</span> */}
          <Card
            orientation="horizontal"
            sx={{
              width: "100%",
              flexWrap: "wrap",
              [`& > *`]: {
                "--stack-point": "500px",
                minWidth:
                  "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
              },
              // make the card resizable for demo
              overflow: "auto",
              resize: "horizontal",
            }}
           >
            <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
              <img
                srcSet={e.images.split(",")[0]}
                src={hotelImage}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent>
              <Typography fontSize="xl" fontWeight="lg">
                {e.name}
              </Typography>
              <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                {supplement}
              </Typography>
              <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                {total}
              </Typography>
              <Sheet
                sx={{
                  bgcolor: "background.level1",
                  borderRadius: "sm",
                  p: 1.5,
                  my: 1.5,
                  display: "flex",
                  gap: 2,
                  "& > div": { flex: 1 },
                }}
              >
                <div>
                  <Typography component="legend">
                    Evaluation de l'hôtel
                  </Typography>
                  <Rating name="read-only" value={e.category} readOnly />
                </div>
              </Sheet>
              <Box
                sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}
              >
                <Button
                  variant="solid"
                  color="primary"
                  onClick={() => console.log(e.prices)}
                >  <NavLink to="/validReservation">
                  
                  Reservez
                </NavLink>
                  
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default HotelsPrices;
