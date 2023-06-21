import "/src/styles/Package.scss";

export const Package = () => {
  const pack = [
    {
      name: "Paquete Básico",
      info: "Claro, aquí tienes una versión más detallada: “Con nuestro editor de juegos online, tendrás acceso a una amplia variedad de plantillas, tutoriales y recursos para crear juegos sencillos y divertidos. Nuestra plataforma es fácil de usar y está diseñada para principiantes o aficionados que quieran experimentar con la creación de juegos.",
      price: 9.99,
    },
    {
      name: "Paquete Avanzado",
      info: "Podrás descargar nuestro software de desarrollo de juegos profesional, con herramientas avanzadas para programar, diseñar y testear tus propios juegos. Podrás exportarlos a diferentes plataformas y venderlos si quieres. Perfecto para creadores independientes o estudiantes.",
      price: 19.99,
    },
    {
      name: "Paquete Premium",
      info: "Podrás disfrutar de todos los beneficios del paquete avanzado, más un servicio de asesoría personalizada con nuestros expertos en desarrollo de videojuegos. Te ayudarán a mejorar tus habilidades, resolver tus dudas y darle el toque final a tus proyectos. Además, tendrás acceso a eventos exclusivos, concursos y promociones. Imprescindible para los apasionados de los videojuegos.",
      price: 49.99,
    },
  ];

  return (
    <section className="package">
      <h2 className="package-title">Paquetes</h2>
      <p className="package-p">
        Podemos hacer realidad tu idea, desde el diseño hasta la programación,
        pasando por el arte y la música. No importa si quieres un juego de
        acción, de aventura, de estrategia o de rompecabezas. ¡Lo hacemos todo!
        Y lo mejor de todo es que tenemos precios muy competitivos y plazos de
        entrega muy rápidos. ¿A qué esperas? Contacta con nosotros hoy mismo y
        empieza a disfrutar de tu propio juego personalizado.
      </p>
      <ul className="package-cards">
        {pack.map((pack) => (
          <div className="package-card" key={pack.name}>
            <h4 className="package-card-title">{pack.name}</h4>
            <p className="package-card-info">{pack.info}</p>
            <p className="package-card-price">{`$${pack.price}`}</p>
          </div>
        ))}
      </ul>
    </section>
  );
};
