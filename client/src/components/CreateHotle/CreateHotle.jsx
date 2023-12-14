import React, { useState } from "react";
import "./CreateHotel.css";
import { uploadCloudianry } from "./Uplaod";
import { ImageList, ImageListItem } from "@mui/material";
import Slideshow from "../Slideshow/Slideshow";
import { Link } from "react-router-dom";

const CreateHotel = () => {
  const [images, setImages] = useState(null);
  const [links, setLinks] = useState([]);
  const uploadImages = async (e) => {
    e.preventDefault();
    try {
      let arr = [];
      for (let i = 0; i < images.length; i++) {
        const data = await uploadCloudianry(images[i]);
        arr.push(data);
      }
      setLinks(arr);
    } catch (err) {
      console.log(err);
    }
  };

  
  return (
    <div className="page">
        <h2 id="ter">Ajouter nouvelle hotel</h2>
      <div className="createHotel">
        <div>
          <label htmlFor="hotel-name">Nom d'hotel</label>
          <input type="text" id="hotel-name" />
        </div>
        <div className="hotel-categorie">
          <span>Categorie </span>
          <select name="Categorie" class="ipt-select" required>
            <option
              label="Trois étoiles"
              value="Trois étoiles"
              selected="selected"
            >
              Trois étoiles
            </option>
            <option label="Quatre étoiles" value="Quatre étoiles">
              Quatre étoiles{" "}
            </option>
            <option label="Cinq étoiles " value="Cinq étoiles ">
              Cinq étoiles{" "}
            </option>
          </select>
        </div>
        <div className="hotel-Email-reser">
          <span>Réservation </span>
          <input type="text" placeholder="Email de réservation" />
        </div>
        <div className="hotel-Email-recep">
          <span>Réception </span>
          <input type="text" placeholder="Email de réception" />
        </div>
        <div className="hotel-phon">
          <span>Téléphone </span>
          <input type="text" />
        </div>
        <div className="hotel-responsable">
          <span>Responsable </span>
          <input type="text" placeholder="Nome de responsable" />
        </div>
        <div className="file-input-container">
          <input
            type="file"
            id="images"
            accept="image/*"
            onChange={(e) => {
              setImages(e.target.files);
            }}
            className="file-input"
            multiple={true}
            max={6}
          />
          {/* <label className="custom-file-input" htmlFor="images">
            Choisir le fichier
          </label> */}
          {images && (
            <p className="selected-file-name">
              Fichier sélectionné: {images.name}
            </p>
          )}
        </div>
        <div>
          <button onClick={uploadImages}>Importer les images</button>
        </div>
        
        <Link to={"CreatePeriods"}><button style={{ width: "200px", height: "53px" }}>Suivant </button></Link>
     {/* { links && links.length > 0 &&  
     <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {links.map((item) => (
            <ImageListItem key={item.url}>
              <img
                srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                alt={item.publicId}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        
        } */}
        <Slideshow images={links}/>
      </div>
      {/* {links &&
        links.length > 0 &&
        links.map((links) => {
          return (
            <div key={links?.publicId}>
              <p>publicId:{links.publicId}</p>
              <p>url:{links.url}</p>
              <img width={300} src={links.url} alt="" />
            </div>
          );
        })} */}
    </div>
  );
};

export default CreateHotel;
