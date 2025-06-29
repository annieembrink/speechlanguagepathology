import { useState, useEffect } from "react";

const TextWeOffer = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <>
    
    {/* <h3 className="marginTopAndBottom">Tjänster</h3> */}
        
      <div className="container">
        <div className="containerDiv">
          <p>Väntetider just nu: 1-2 veckor</p>
          <p>Uppdaterat {currentDate}</p>
        </div>
      </div>

      <div className="container">
  <h4 className="marginBottom" onClick={() => toggleSection("las-skriv")} style={{ cursor: "pointer" }}>
    Läs- och skrivutredning
  </h4>
  {activeSection === "las-skriv" && (
    <div className="containerDiv">
      <p>
        Jag erbjuder utredning av läs- och skrivsvårigheter hos både barn och vuxna.
   
        Bedömningen omfattar tester av avkodning, stavning, läsförståelse och relaterade språkliga förmågor.
   
        Du får ett skriftligt utlåtande med resultat, slutsatser och rekommendationer.
      </p>
    </div>
  )}
</div>


      <div className="container">
        <h4 className="marginBottom" onClick={() => toggleSection("sprakstorning")} style={{ cursor: "pointer" }}>
          Utredning av språkstörning
        </h4>
        {activeSection === "sprakstorning" && (
          <div className="containerDiv">
            <p>
              Jag erbjuder bedömning och behandling av språkstörning hos både barn och vuxna.
            
              Bedömningen omfattar en kartläggning av språkliga svårigheter, med fokus på ordförråd, grammatik, språkförståelse och berättande.
          
              Du får en skriftlig sammanfattning och rekommendationer kring fortsatt stöd.
            </p>
          </div>
        )}
      </div>
      <div className="container">
  <h4 className="marginBottom" onClick={() => toggleSection("intyg")} style={{ cursor: "pointer" }}>
    Intyg för högskoleprovet
  </h4>
  {activeSection === "intyg" && (
    <div className="containerDiv">
      <p>
        Jag erbjuder intyg vid dyslexi för dig som ska skriva högskoleprovet.
        Intyget baseras på en genomförd läs- och skrivutredning med standardiserade tester.
        Du får ett formellt dokument som kan användas vid ansökan om förlängd provtid.
      </p>
    </div>
  )}
</div>

    
    </>
  );
};

export default TextWeOffer;
