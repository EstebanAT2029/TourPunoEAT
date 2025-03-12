import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Lago Titicaca y sus Islas",
    location: "Puno, Puno",
    description: "Islas Flotantes de los Uros: Construidas con totora, donde los habitantes mantienen sus tradiciones ancestrales.",
    price: 120,
    type: "Cultura",
  },
  {
    img: Img2,
    title: "Sitios Arqueológicos",
    location: "Puno, Sillustani",
    description: "Chullpas de Sillustani: Antiguas torres funerarias de la cultura Kolla con impresionantes vistas al lago Umayo.",
    price: 220,
    type: "Cultura",
  },
  {
    img: Img3,
    title: "Lugares Culturales y Naturales",
    location: "Puno, Puno",
    description: "Catedral de Puno: Ejemplo del arte barroco mestizo del siglo XVIII.",
    price: 90,
    type: "Cultura",
  },
  {
    img: Img4,
    title: "Festividades y Cultura",
    location: "Puno, Puno",
    description: "Fiesta de la Virgen de la Candelaria (febrero): La festividad más grande de Puno, con danzas y música tradicionales.",
    price: 90,
    type: "Cultura",
  },
  {
    img: Img5,
    title: "Chucuito (a 18 km de Puno)",
    location: "Puno, Chucuito",
    description: "Templo de la Fertilidad (Inca Uyo): Estructura con monolitos en forma de falo, vinculados a rituales de fertilidad.",
    price: 150,
    type: "Cultura",
  },
  {
    img: Img6,
    title: "Juli (a 79 km de Puno)",
    location: "Puno, Juli",
    description:
      "Las Iglesias Coloniales: Juli es conocida como la Pequeña Roma de América por sus impresionantes iglesias coloniales como San Pedro, Santa Cruz y San Juan de Letrán.",
    price: 180,
    type: "Cultura",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Lugares Turisticos en Puno
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
