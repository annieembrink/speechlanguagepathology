import { useState } from "react";
import TextHomePage from "./textHomePage";
import TextWeOffer from "./textWeOffer";

const Menu = () => {
    const [activePage, setActivePage] = useState("Hem");

    const handleClick = (page) => {
        setActivePage(page);
    };

    return ( 
        <div>
            <div id="menuBar">
                <button onClick={() => handleClick("Hem")}>Hem</button>
                {/* <button onClick={() => handleClick("Om")}>Om</button> */}
                <button onClick={() => handleClick("Digital vård")}>Digital vård</button>
                <button onClick={() => handleClick("Vi erbjuder")}>Vi erbjuder</button>
                <button onClick={() => handleClick("Priser")}>Priser</button>
                <button onClick={() => handleClick("Kontakt")}>Kontakt</button>
            </div>

            <div id="content">
                {activePage === "Hem" && <TextHomePage></TextHomePage>}
                {/* {activePage === "Om" && <p>Om oss: Här är lite information om oss.</p>} */}
                {activePage === "Digital vård" && <p>Vi erbjuder digital vård för alla!</p>}
                {activePage === "Vi erbjuder" && <TextWeOffer></TextWeOffer>}
                {activePage === "Priser" && <p>Här hittar du våra priser.</p>}
                {activePage === "Kontakt" && <p>Kontakta oss gärna!</p>}
            </div>
        </div>
    );
}

export default Menu;
