import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          Bienvenidos a Hostal Qatani Inn, su hogar en la ciudad de Puno. Nos enorgullece ofrecer a nuestros huéspedes una estancia cómoda, acogedora y con un servicio personalizado que hará de su visita una experiencia inolvidable.

          Ubicados estratégicamente en Jr. Ilo N° 04, en el corazón de Puno, brindamos fácil acceso a los principales atractivos turísticos de la ciudad, como la Plaza de Armas, el Parque Pino, la Catedral de Puno, y el hermoso Lago Titicaca. Nuestro hostal es el punto de partida ideal para explorar la riqueza cultural y natural de esta fascinante región.

En Hostal Qatani Inn, nos preocupamos por el bienestar y la satisfacción de nuestros huéspedes. Contamos con habitaciones confortables y bien equipadas, Wi-Fi gratuito en todas las áreas, una terraza con vistas a la ciudad y un ambiente tranquilo y seguro para garantizar el descanso que necesita.




          </p>
          <br />
          <p>
          Nuestro equipo de trabajo está comprometido con la hospitalidad y la atención de calidad. Desde su llegada hasta su partida, nos aseguramos de que su estancia sea placentera y libre de preocupaciones. Además, estamos siempre disponibles para brindarle recomendaciones sobre los mejores lugares para visitar, restaurantes y actividades en la zona.

Le invitamos a disfrutar de la magia de Puno con la comodidad y calidez que solo Hostal Qatani Inn puede ofrecerle. ¡Esperamos recibirlo pronto!
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
