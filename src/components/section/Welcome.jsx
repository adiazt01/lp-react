import "/src/styles/welcome.scss";

export const Welcome = () => {
  return (
    <section className="welcome" id="Home">
      <div className="welcome-info">
        <h2 className="welcome-title">Creamos mundos, creamos sueños 👾</h2>
        <p className="welcome-p">
          Queremos que nuestros juegos sean más que entretenimiento, sino
          también una forma de expresarse, explorar y conectar con otros.
        </p>
        <h4 className="welcome-title">Trabaja con nostros!</h4>
        <form action="" className="welcome-form">
          <input type="email" className="welcome-input" placeholder="email"/>
          <button className="welcome-send">Enviar</button>
        </form>
      </div>
      <img src="/img/img1.png" alt="" className="welcome-img" />
    </section>
  );
};
