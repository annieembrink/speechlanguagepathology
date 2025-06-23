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
          <h4 onClick={() => toggleSection("las-skriv")} style={{ cursor: "pointer" }}>
            Läs- och skrivutredning
          </h4>
          {activeSection === "las-skriv" && (
            <div>
              <p>
                En läs- och skrivutredning syftar till att kartlägga individens språkliga styrkor
                och svårigheter för att bedöma om det finns tecken på dyslexi eller andra
                läs- och skrivsvårigheter.
              </p>
              <h5>Hur går en läs- och skrivutredning till?</h5>
              <ul>
                <li>Inledande samtal – Vi går igenom bakgrund, tidigare erfarenheter och eventuella svårigheter.</li>
                <li>Testning – Jag genomför en omfattande språk- och läs-/skrivbedömning med standardiserade tester.</li>
                <li>Återkoppling och skriftligt utlåtande – Efter utredningen får du en detaljerad rapport med rekommendationer.</li>
                <li>Kommunikation med skola eller arbetsplats – Jag ger vägledning kring anpassningar och stödinsatser.</li>
                <li>Jag kan också skriva intyg för exempelvis högskoleprovet.</li>
              </ul>
              <p>
                Observera att jag inte förskriver hjälpmedel, men skolan är skyldig att erbjuda anpassningar.
                Jag kan även ge råd kring hjälpmedel för vuxna.
              </p>
            </div>
          )}
          </div>
<div className="container">
          <h4 onClick={() => toggleSection("sprakstorning")} style={{ cursor: "pointer" }}>
            Utredning av språkstörning
          </h4>
          {activeSection === "sprakstorning" && (
            <div>
              <p>
                Jag erbjuder bedömning och behandling av språkstörning hos både barn och vuxna. Bedömningen
                omfattar en kartläggning av språkliga svårigheter, med fokus på ordförråd, grammatik, språkförståelse
                och berättande. Du får en skriftlig sammanfattning och rekommendationer kring fortsatt stöd.
              </p>
            </div>
          )}
          </div>
<div className="container">
          <h4 onClick={() => toggleSection("svaljningssv")} style={{ cursor: "pointer" }}>
            Konsultation vid sväljningssvårigheter
          </h4>
          {activeSection === "svaljningssv" && (
            <div>
              <ul>
                <li>Sväljsvårigheter</li>
                <li>Afasi (språkliga svårigheter efter hjärnskada)</li>
                <li>Dysartri (talsvårigheter efter hjärnskada)</li>
                <li>Röststörningar (heshet, rösttrötthet, svag röst)</li>
              </ul>
          
            </div>
          )}
          </div>
          <div className="container">
          <h4 onClick={() => toggleSection("hembesok")} style={{ cursor: "pointer" }}>
          Hembesök i Stockholmsområdet
          </h4>
          {activeSection === "hembesok" && (
            <div>
           För patienter som har svårt att ta sig till en mottagning erbjuder jag hembesök i södra
           Stockholm och Stockholms innerstad. Detta gäller både utredningar och behandlingar.
          
            </div>
          )}
          </div>
          <div>
      </div>
    </div>
  );
};

export default TextWeOffer;
