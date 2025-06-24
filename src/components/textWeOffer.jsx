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
    <div>
      <div className="container">
        <div className="containerDiv">
          <p>Väntetider just nu: 1 vecka</p>
          <p>Uppdaterat {currentDate}</p>
        </div>
      </div>

      <div className="container">
  <h4 className="marginTopAndBottom" onClick={() => toggleSection("las-skriv")} style={{ cursor: "pointer" }}>
    Läs- och skrivutredning
  </h4>
  {activeSection === "las-skriv" && (
    <div>
      <p className="marginTopAndBottom">
        Jag erbjuder utredning av läs- och skrivsvårigheter hos både barn och vuxna.
      </p>
      <p className="marginTopAndBottom">
        Bedömningen omfattar tester av avkodning, stavning, läsförståelse och relaterade språkliga förmågor.
      </p>
      <p className="marginTopAndBottom">
        Du får ett skriftligt utlåtande med resultat, slutsatser och rekommendationer.
      </p>
    </div>
  )}
</div>


      <div className="container">
        <h4 className="marginTopAndBottom" onClick={() => toggleSection("sprakstorning")} style={{ cursor: "pointer" }}>
          Utredning av språkstörning
        </h4>
        {activeSection === "sprakstorning" && (
          <div>
            <p className="marginTopAndBottom">
              Jag erbjuder bedömning och behandling av språkstörning hos både barn och vuxna.
            </p>
            <p className="marginTopAndBottom">
              Bedömningen omfattar en kartläggning av språkliga svårigheter, med fokus på ordförråd, grammatik, språkförståelse och berättande.
            </p>
            <p className="marginTopAndBottom">
              Du får en skriftlig sammanfattning och rekommendationer kring fortsatt stöd.
            </p>
          </div>
        )}
      </div>
      <div className="container">
  <h4 className="marginTopAndBottom" onClick={() => toggleSection("intyg")} style={{ cursor: "pointer" }}>
    Intyg för högskoleprovet
  </h4>
  {activeSection === "intyg" && (
    <div>
      <p className="marginTopAndBottom">
        Jag erbjuder intyg vid dyslexi för dig som ska skriva högskoleprovet.
      </p>
      <p className="marginTopAndBottom">
        Intyget baseras på en genomförd läs- och skrivutredning med standardiserade tester.
      </p>
      <p className="marginTopAndBottom">
        Du får ett formellt dokument som kan användas vid ansökan om förlängd provtid.
      </p>
    </div>
  )}
</div>

    </div>
  );
};

export default TextWeOffer;
