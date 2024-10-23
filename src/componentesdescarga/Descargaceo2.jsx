import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import '../styles/ContentWithImage.css';

const Descargaceo2 = () => {
  return (
    <div>
      <a href="/CV_ESG.pdf" download className="download-button">
        
      <button className="download-button" style={{ marginLeft: '980px',width: '70px',height: '30px' }}>
        <FontAwesomeIcon icon={faDownload} /> {/* Ícono dentro del botón */}
        CV
      </button>



      </a>
    </div>
  );
};

export default Descargaceo2;