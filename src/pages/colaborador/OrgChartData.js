export const orgChartData = {
    name: "Guillermina Samano",
    image: "src/img/CEO.png", // URL de la imagen del CEO
    children: [
      {
        name: "Manager 1",
        image: "https://via.placeholder.com/100", // URL de la imagen del Manager 1
        children: [
          { 
            name: "Desarrollo de Sistemas", 
            image: "https://via.placeholder.com/100", // URL de la imagen del Team Lead 1
          },
          { 
            name: "ITS y Telepeaje", 
            image: "https://via.placeholder.com/100", // URL de la imagen del Team Lead 2
          },
        ],
      },
      {
        name: "Mesa de Ayuda",
        image: "https://via.placeholder.com/100", // URL de la imagen del Manager 2
        children: [
          { 
            name: "Team Lead 3", 
            image: "https://via.placeholder.com/100", // URL de la imagen del Team Lead 3
          },
        ],
      },
    ],
  };