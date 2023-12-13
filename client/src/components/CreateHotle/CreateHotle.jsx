import React, { useState } from 'react';
import './CreateHotel.css';

const CreateHotel = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };



  return (
    <div className='page'>
      <div className='createHotel'>
        <div className='hotel-name'>
        <label htmlFor="hotel-name">Nom d'hotel</label>
<input type="text" id="hotel-name" />

        </div>
        <div className='hotel-categorie'>
            <span>Categorie </span>
            <select name="Categorie" class="ipt-select" required>
					<option label="Trois étoiles" value="Trois étoiles" selected="selected">Trois étoiles</option>
					<option label="Quatre étoiles" value="Quatre étoiles">Quatre étoiles </option>
					<option label="Cinq étoiles " value="Cinq étoiles ">Cinq étoiles </option>
				
				</select>  
        </div>
        <div className='hotel-Email-reser'>
            <span>Réservation </span>
            <input type="text" placeholder='Email de réservation'/>
        </div>
        <div className='hotel-Email-recep'>
            <span>Réception </span>
            <input type="text" placeholder='Email de réception' />
        </div>
        <div className='hotel-phon'>
            <span>Téléphone </span>
            <input type="text" />
        </div>
        <div className='hotel-responsable'>
            <span>Responsable </span>
            <input type="text" placeholder='Nome de responsable'/>
        </div>
        <div className="file-input-container">
          <input
            type="file"
            id="images"
            accept="image/*"
            onChange={handleImageChange}
            className="file-input"
            multiple
            max={6}
          />
          <label className="custom-file-input" htmlFor="images">Choisir le fichier</label>
          {selectedImage && (
            <p className="selected-file-name">Fichier sélectionné: {selectedImage.name}</p>
          )}
        </div>
        <button style={{width:'200px',height:'53px'}}>Suivant </button>
        <button>Importer des images</button>
      </div>
    </div>
  );
};

export default CreateHotel;
