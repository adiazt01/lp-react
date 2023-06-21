import "/src/styles/Benefits.scss";

export const Benefits = () => {
  const benefits = [
    { benefit: "Somos expertos en crear juegos divertidos y originales." },
    { benefit: "Ofrecemos precios competitivos y plazos razonables." },
    {
      benefit:
        "Contamos con un equipo de profesionales cualificados y apasionados.",
    },
    {
      benefit:
        " Garantizamos la satisfacción del cliente y el soporte técnico.",
    },
    {
      benefit:
        "Estamos al día de las últimas tendencias y tecnologías del sector.",
    },
  ];

  return (
    <section className="benefits" id="Servicios">
      <div className="benefits-section">
        <h2 className="benefits-title">Beneficios</h2>
        <ul className="benefits-lits">
          {benefits.map((benefit, index) => (
            <li className="benefits-lits-item" key={index}>
              {`⭐ ${benefit.benefit}`}
              <hr className="benefits-lits-line" />
            </li>
          ))}
        </ul>
      </div>
      <div className="comment-section">
        <h2 className="comment-title">Nuestros clientes</h2>
        <div className="comment-card">
          <img
            src="/img/profile/pikachu.png"
            alt="pikachu-profile"
            className="comment-card-profile"
          />
          <p className="comment-card-author">- Pikachu</p>
          <p className="comment-card-p">
            ¡Me encanta su videojuego! Es el mejor que he jugado en mucho
            tiempo. Los gráficos, la música, la historia, todo es increíble.
            Quiero felicitarlos por su excelente trabajo y agradecerles por
            crear esta maravilla.
            <br />
            Espero con ansias sus próximos proyectos. ¡Sigan así!
          </p>
        </div>
      </div>
    </section>
  );
};
