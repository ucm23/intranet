import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Descargadev2 = () => {
  return (
    <div>
      <a href="/CV_UCM.pdf" download className="download-button">
        
            <button className="download-button" style={{ marginLeft: '980px' }}>
        <FontAwesomeIcon icon={faDownload} /> {/* Ícono dentro del botón */}
        CV
      </button>



      </a>
    </div>
  );
};

export default Descargadev2;