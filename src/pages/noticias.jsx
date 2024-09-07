import React from 'react';
import NavBar from '../components/NavBar';
import CarruselNoticias from '../components/CarruselNoticias';
import Footer from '../components/Footer';
import BootstrapCard from '../components/BootstrapCard'; // Importa el componente BootstrapCard
import data from '../assets/info_noticias.json';
import TituloPages from '../components/TituloPages'; // Importa el nuevo componente


// Añadir el campo ID a las noticias
const newsDataWithId = data.map((item, index) => ({
    ...item,
    id: index + 1 // Genera un ID único basado en el índice
}));

const Noticias = () => (
    <div>
        <NavBar backgroundColor="#001529" />
        <TituloPages text="Noticias" />
        <CarruselNoticias />
        <div className="container mt-4">
            <div className="row">
                {newsDataWithId.map((card) => (
                    <div key={card.id} className="col-md-4 d-flex justify-content-center">
                        <BootstrapCard 
                            id={card.id}  // Usar el identificador único de cada noticia
                            imageSrc={card.imageSrc}
                            newsTitle={card.newsTitle}
                            date={card.date}
                            time={card.time}
                            description={card.description}
                        />
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
);

export default Noticias;
//HEX:#703412

