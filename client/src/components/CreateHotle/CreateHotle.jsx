import React, { useState } from "react";
import "./CreateHotel.css";
import { uploadCloudianry } from "./Uplaod";
import Slideshow from "../Slideshow/Slideshow";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import resizeImage from "../../constants/resizeImage";

const CreateHotel = ({ setHotelId }) => {
  const [images, setImages] = useState(null);
  const [links, setLinks] = useState([]);
  const [name, setName] = useState('');
  const [emailReception, setEmailReception] = useState('');
  const [emailReservation, setEmailReservation] = useState('');
  const [category, setCategory] = useState('');
  const [phone, setPhone] = useState("");
  const [responsible,setResponsible]=useState("")
  const [location,setLocation]=useState("")
  const navigate = useNavigate();

  const uploadImages = async (e) => {
    e.preventDefault();
    try {
      let arr = [];
      for (let i = 0; i < images.length; i++) {
        const resizedImage = await resizeImage(images[i]);
        const data = await uploadCloudianry(resizedImage);
        arr.push(data);
      }
      setLinks(arr);
    } catch (err) {
      console.log(err);
    }
  };

  const postHotel = () => {
    if (name && emailReception && emailReservation && category) {
      axios.post('http://127.0.0.1:5000/app/hotel/createHotel', {
        name,
        emailReception,
        emailReservation,
        images: links[0]?.url || "",
        category,
        phone,
        responsible,
        location
      })
        .then(result => {
          setHotelId(result.data.id);
          alert('Hôtel ajouté avec succès');
          navigate('/CreatePeriods');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  };

  const buttonStyle = {
    width: "200px",
    height: "53px",
  };

  return (
    <div className="page">
      <h2 id="ter">Ajouter nouvelle hôtel</h2>
      <div className="createHotel">
        <div>
          <label htmlFor="hotel-name">Nom d'hotel</label>
          <input
            type="text"
            id="hotel-name"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="hotel-categorie">
          <span>Categorie </span>
          <select
            name="Categorie"
            className="ipt-select"
            required={true}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option label="Trois étoiles" value={3}>
              Trois étoiles
            </option>
            <option label="Quatre étoiles" value={4}>
              Quatre étoiles
            </option>
            <option label="Cinq étoiles" value={5}>
              Cinq étoiles
            </option>
          </select>
        </div>
        <div className="hotel-Email-reser">
          <span>Réservation </span>
          <input
            type="email"
            placeholder="Email de réservation"
            required={true}
            value={emailReservation}
            onChange={(e) => setEmailReservation(e.target.value)}
          />
        </div>
        <div className="hotel-Email-recep">
          <span>Réception </span>
          <input
            type="email"
            placeholder="Email de réception"
            required={true}
            value={emailReception}
            onChange={(e) => setEmailReception(e.target.value)}
          />
        </div>
        <div className="hotel-phon">
          <span>Téléphone </span>
          <input
            type="number"
            required={true}
            maxLength={8}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="hotel-responsable">
          <span>Responsable </span>
          <input type="text" placeholder="Nome de responsable" required={true} value={responsible} onChange={e=>{setResponsible(e.target.value)}} />
        </div>
        <div className="hotel-responsable">
          <span>Adress </span>
          <input type="text" placeholder="Adress" required={true} value={location} onChange={e=>{setLocation(e.target.value)}} />
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
          {images && (
            <p className="selected-file-name">
              Fichier sélectionné: {images[0].name}
            </p>
          )}
        </div>
        <div>
          <button onClick={uploadImages}>Importer les images</button>
        </div>
        <button style={buttonStyle} onClick={postHotel}>
          Suivant
        </button>
        <Slideshow images={links} />
      </div>
    </div>
  );
};

export default CreateHotel;
