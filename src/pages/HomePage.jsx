import { useState } from "react";
import '../style.css';
import Menu from '../components/menu';
import TextHomePage from '../components/textHomePage';
import TextWeOffer from '../components/textWeOffer';
import TextAbout from "../components/textAbout";
import TextDigitalCare from "../components/textDigitalCare";
import TextContact from "../components/textContact";
import TextPrices from "../components/textPrices";

const HomePage = () => {
    const [activePage, setActivePage] = useState("Hem");

    return ( 
        <div>
            <div className="container" id="headerContainer">
                <div id="headerName" onClick={() => setActivePage("Hem")}>  
                    <div id='imgDiv'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21 21">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18.5 6.59q-2-1.09-4-1.09c-2 0-2.667.364-4 1.09v9.91q2-1 4-1c2 0 2.667.333 4 1zm-8 0q-2-1.09-4-1.09c-2 0-2.667.364-4 1.09v9.91q2-1 4-1c2 0 2.667.333 4 1z" strokeWidth="0.5"/>
                        </svg>
                    </div>
                    <h1 id='headerH1'>Webblogopeden</h1>
                </div>

                <div id='rightElements'>
                    <div id="headerTagline">
                        <h3>Din dyslexilogoped över hela Sverige</h3>
                    </div>
                    {/* <div id="headerContact">
                        <h4>072 538 48 17</h4>
                        <h4>webblogopeden@gmail.com</h4>
                    </div> */}
                </div>
            </div>

            <Menu setActivePage={setActivePage} /> 

            <div id="content">
                {activePage === "Hem" && <TextHomePage />}
                {activePage === "Om" && <TextAbout/>}
                {activePage === "Digital vård" && <TextDigitalCare/>}
                {activePage === "Tjänster" && <TextWeOffer />}
                {activePage === "Priser" && <TextPrices/>}
                {activePage === "Kontakt" && <TextContact/>}
            </div>
        </div>
    );
}

export default HomePage;
