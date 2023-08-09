import React from "react";
import CardList from "./CardList";


const data = [
  {
    id: 1,
    title: "Gato durmiendo",
    image: "https://via.placeholder.com/150",
    description: "Un lindo gato durmiendo en una almohada."
  },
  {
    id: 2,
    title: "Paisaje de montañas",
    image: "https://via.placeholder.com/150",
    description: "Un hermoso paisaje de montañas cubiertas de nieve."
  },
  {
    id: 3,
    title: "Flores en un jardín",
    image: "https://via.placeholder.com/150",
    description: "Un jardín lleno de flores de colores brillantes."
  }
];

const Card = () => {
  return <CardList data={data} />;
};

export default Card;
