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
import { useDispatch, useSelector } from "react-redux";
import { setTotal, setTotalAmount } from "../../../features/resrvationSlice";
import { selectOneHotel } from "../../../features/hotelPrices";
import { findObjectByType, findPeriodId, handleRoomsPrice } from "../../../utils/helper";

function HotelsPrices({
  // checkInDate,
  // checkOutDate,
  // numberDays,
  roomData,
  hotels,
}) {
  const checkInDate = useSelector((state) => state.reservation.reservationDate.checkInDate);
  const checkOutDate = useSelector((state) => state.reservation.reservationDate.checkOutDate);
  const { values} = useSelector((state) => state.roomData);
  const supplement = useSelector(state => state.reservation.supplement);
  const theTotal = useSelector(state => state.reservation.theTotal);
// useEffect(()=>{console.log('hotel pricecs the total',theTotal)},[theTotal])

  const dispatch = useDispatch(); 

  const totalAmount = useSelector((state) => state.reservation.totalAmount);
  

  return (
    <>
      {hotels?.map((e,index) => (
        <Box
          key={e.id}
          sx={{
            width: "100%",
            position: "relative",
            overflow: { xs: "auto", sm: "initial" },
          }}
        >
          {/* <button onClick={() => handleRoomsPrice(e.prices)}>Rooms</button> */}
          <button onClick={() => console.log(e.prices)}>Rooms12</button>
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
                the tot {handleRoomsPrice(e.prices, supplement,roomData,e.periods,checkInDate,checkOutDate)}
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
                  onClick={() => {dispatch(setTotalAmount(handleRoomsPrice(e.prices, supplement,roomData,e.periods,checkInDate,checkOutDate)))
                    dispatch(selectOneHotel(hotels[index]))
                  console.log('thsi si sthe hotel id',hotels[index])
                }}
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
