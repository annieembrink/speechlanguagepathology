import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import '../style.css';

import Menu from '../components/menu';
import TextHomePage from '../components/textHomePage';
import TextWeOffer from '../components/textWeOffer';
import TextAbout from "../components/textAbout";
import TextDigitalCare from "../components/textDigitalCare";
import TextContact from "../components/textContact";
import TextPrices from "../components/textPrices";

import { FaBars, FaTimes } from "react-icons/fa";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (page) => {
    setOpen(false);

    // Map internal names to routes
    const routeMap = {
      "Hem": "/",
      "Om": "/about",
      "Digital vård": "/digital-care",
      "Tjänster": "/services",
      "Priser": "/prices",
      "Kontakt": "/contact",
    };

    navigate(routeMap[page] || "/");
  };

  return (
    <div>
      <div className="container" id="headerContainer">
        <div id="headerName" onClick={() => handleNavClick("Hem")}>
          <div>
            <img
              width={300}
              src="/img/webblogopeden-high-resolution-logo-transparent.png"
              alt="Webblogopeden logo"
            />
          </div>

          <div id="menuIcon" onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      <Menu setOpen={setOpen} open={open} setActivePage={handleNavClick} />

      <div id="content">
        <Routes>
          <Route path="/" element={<TextHomePage />} />
          <Route path="/about" element={<TextAbout />} />
          <Route path="/digital-care" element={<TextDigitalCare />} />
          <Route path="/services" element={<TextWeOffer />} />
          <Route path="/prices" element={<TextPrices />} />
          <Route path="/contact" element={<TextContact />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
