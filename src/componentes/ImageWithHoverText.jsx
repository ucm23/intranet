import React from 'react';
// import './ImageWithHoverText.css'; // Asegúrate de tener los estilos
import "../styles/ImageWithHoverText.css";

const ImageWithHoverText = ({ imgSrc, hoverText }) => {
  return (
    <div className="image-container">
      <img src={imgSrc} alt="Imagen" className="hover-image" />
      <span className="hover-text">{hoverText}</span>
    </div>
  );
};

export default ImageWithHoverText;