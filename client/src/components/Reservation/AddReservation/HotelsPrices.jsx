import React, { useEffect, useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import axios from "axios";
import hotelImage from "../../../assets/hotel.png";
import { Rating } from "@mui/material";

function HotelsPrices({rooms,checkInDate,checkOutDate,location,numberDays}) {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
      getHotels();
      console.log(hotels)
    }, []);
    const getHotels = () => {
      axios
        .post("http://127.0.0.1:5000/app/hotel/getHotelLocation",{
            location:"jerba" ,
            checkIn:checkInDate,
            checkout:checkOutDate
        })
        .then((result) => {
          setHotels(result.data);
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const fixPrice = (currentPrice, periods) => {
      let result = null;
    
      if (periods?.length < 2) {
        result = currentPrice * numberDays;
      } else {
        const checkInPeriod1 = new Date(checkInDate);
        const checkOutPeriod1 = new Date(periods[0].end_date);
        const checkInPeriod2 = new Date(periods[1].start_date);
        const checkOutPeriod2 = new Date(checkOutDate);
    
        const differenceInTimePeriod1 = checkOutPeriod1.getTime() - checkInPeriod1.getTime();
        const differenceInDaysPeriod1 = differenceInTimePeriod1 / (1000 * 3600 * 24);
        const differenceInTimePeriod2 = checkOutPeriod2.getTime() - checkInPeriod2.getTime();
        const differenceInDaysPeriod2 = differenceInTimePeriod2 / (1000 * 3600 * 24);
    
        result = differenceInDaysPeriod1 * currentPrice + differenceInDaysPeriod2 * currentPrice;
        console.log(checkInPeriod1,checkOutPeriod1)
      }
    
      return result;
    };
    
    return (
      <>
      <button onClick={()=>{console.log(numberDays)}}>days</button>
        {hotels?.map((e) => (
          <Box
            key={e.id}
            sx={{
              width: "100%",
              position: "relative",
              overflow: { xs: "auto", sm: "initial" },
            }}
          >
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
                <Typography
                  level="body-sm"
                  fontWeight="lg"
                  textColor="text.tertiary"
                >
                  {fixPrice(e.prices[0].price, e.periods)}
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
                    variant="outlined"
                    color="neutral"
                  >
                    Ajouter un promo
                  </Button>
                  <Button variant="solid" color="primary">
                    Modifier
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </>
    );
}

export default HotelsPrices