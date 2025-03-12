import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img3,
    title: "Lago Titicaca y sus Islas",
    description: "El Lago Titicaca es el lago navegable más alto del mundo, situado a 3,812 metros sobre el nivel del mar. Además de su belleza natural, es un lugar cargado de historia y cultura, ya que según la leyenda, de sus aguas emergieron Manco Cápac y Mama Ocllo, fundadores del Imperio Inca.",
    author: "Esteban AT",
    date: "diciembre 4, 2025",
  },
  {
    id: 1,
    image: Img2,
    title: "Islas Flotantes de los Uros",
    description:
      "Estas islas artificiales están construidas con totora, una planta acuática que los Uros usan para fabricar sus viviendas, embarcaciones y hasta su suelo flotante. Sus habitantes mantienen un estilo de vida tradicional basado en la pesca, el turismo y la artesanía.Qué hacer: Paseos en balsa de totora, conocer las casas flotantes, aprender sobre la cultura Uro. Dato curioso: Se dice que los Uros eran un pueblo preincaico que huyó al lago para evitar la dominación de los incas y los conquistadores españoles.",
    author: "Esteban AT",
    date: "Enero 22, 2025",
  },
  {
    id: 1,
    image: Img1,
    title: "Chullpas de Sillustani",
    description:
      "Ubicado a 35 km de Puno, este sitio arqueológico alberga torres funerarias preincaicas de la cultura Kolla (1200-1450 d.C.), que fueron utilizadas para enterrar a nobles y sacerdotes. Qué hacer: Recorrer las chullpas, admirar la vista del Lago Umayo, observar la fauna local (zorros, llamas, alpacas). Dato curioso: Algunas chullpas tienen piedras talladas con precisión que rivalizan con las de Machu Picchu.",
    author: "Esteban AT",
    date: "Febrero 2, 2025",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Blogs .::. Lugares mas visitados
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
