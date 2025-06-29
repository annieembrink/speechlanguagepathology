import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ open, setOpen }) => {
  return (
    <nav id="menuBar" className={open ? "open" : "closed"}>
      <Link to="/" onClick={() => setOpen(false)}>Hem</Link>
      <Link to="/about" onClick={() => setOpen(false)}>Om mig</Link>
      {/* <Link to="/services" onClick={() => setOpen(false)}>Digital vård</Link> */}
      <Link to="/services" onClick={() => setOpen(false)}>Tjänster</Link>
      <Link to="/prices" onClick={() => setOpen(false)}>Priser</Link>
      <Link to="/contact" onClick={() => setOpen(false)}>Kontakt & bokning</Link>
    </nav>
  );
}

export default Menu;
