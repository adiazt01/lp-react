import "/src/styles/navbar.scss";

export const Navbar = () => {
  const link = [{ label: "Home" }, { label: "Servicios" }];

  return (
    <header className="header">
      <div className="header_logo">
        <h1 className="header_logo_title">GameDev</h1>
      </div>
      <ul className="header_links">
        {link.map((link) => (
          <a href={`#${link.label}`} key={link.label} className="header_link">
            {link.label}
          </a>
        ))}
      </ul>
    </header>
  );
};
