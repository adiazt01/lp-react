import "/src/styles/Package.scss";

export const Package = () => {
  const pack = [
    {
      name: "Paquete Básico",
      info: "Genial para principiantes o aficionados.",
      price: 9.99,
    },
    {
      name: "Paquete Avanzado",
      info: "Perfecto para creadores independientes o estudiantes.",
      price: 19.99,
    },
    {
      name: "Paquete Premium",
      info: "Imprescindible para los apasionados de los videojuegos.",
      price: 49.99,
    },
  ];

  return (
    <section className="package" id="Paquetes">
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
            <p className="package-card-price">{`${pack.price}$ c/mes`}</p>
            <p className="package-card-buyButton">Comprar</p>
          </div>
        ))}
      </ul>
    </section>
  );
};
