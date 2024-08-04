import React, { useEffect, useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import axios from "axios";
import hotelImage from "../../assets/hotel.png";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Rating,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Promotion from "../Promotion/Promotion";

export default function MyHotels() {
  const [hotels, setHotels] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedHotelId, setSelectedHotelId] = useState(null);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = () => {
    axios
      .get("http://127.0.0.1:5000/app/hotel/getHotels")
      .then((result) => {
        setHotels(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickOpen = (hotelId) => {
    setSelectedHotelId(hotelId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedHotelId(null);
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
                {e.location}
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
                  onClick={() => handleClickOpen(e.id)}
                >
                  Ajouter un promo
                </Button>
                <Button variant="solid" color="primary">
                  Modifier
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
              Ajouter un promo
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Vous pouvez ajouter une promotion pour chaque hôtel en
                sélectionnant simplement la date de début et la date de fin de
                la promotion, ainsi que le pourcentage de réduction que vous
                souhaitez offrir.
              </DialogContentText>
              {selectedHotelId && <Promotion hotelID={selectedHotelId} handleClose={handleClose}/>}
            </DialogContent>
          </Dialog>
        </Box>
      ))}
    </>
  );
}
