import { useState, useEffect } from "react";

const TextWeOffer = () => {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString("sv-SE", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        setCurrentDate(formattedDate);
    }, []);

    return ( 
        <div>
        <div className="container">
            <div className="containerDiv">
                <p>Väntetider just nu</p>
                <p>1 vecka</p>
                <p>Uppdaterat {currentDate}</p>
            </div>
        </div>
        
        
            
            
<div className="container">
    <div className="containerDiv">
                <div>
                    <h4>Läs- och skrivutredning</h4>
                    <p>En läs- och skrivutredning syftar till att kartlägga individens språkliga styrkor och svårigheter för att bedöma om det finns tecken på dyslexi eller andra läs- och skrivsvårigheter.</p>
                </div>

                <div>
                    <h4>Hur går en läs- och skrivutredning till?</h4>
                    <ul>
                        <li>Inledande samtal – Vi går igenom bakgrund, tidigare erfarenheter och eventuella svårigheter.</li>
                        <li>Testning – Jag genomför en omfattande språk- och läs-/skrivbedömning med standardiserade tester.</li>
                        <li>Återkoppling och skriftligt utlåtande – Efter utredningen får du en detaljerad rapport som beskriver resultaten och rekommendationer.</li>
                        <li>Kommunikation med skolan eller arbetsplats – Jag återkopplar till skola eller arbetsplats för att ge vägledning kring anpassningar och stödinsatser.</li>
                        <li>Jag kan också skriva intyg för exempelvis högskoleprovet</li>
                    </ul>
                    <div>
                    <p>Observera att jag inte förskriver hjälpmedel, men skolan är skyldig att erbjuda anpassningar och stöd utifrån utredningens resultat. Om du är vuxen patient kan jag också ge råd och rekommendationer kring hjälpmedel som du kan införskaffa själv.</p></div>
                </div>
                </div>
                </div>
<div className="container">
    <div className="containerDiv">
                    <h4>Jag erbjuder också bedömning och behandling av:</h4>

            
                    <ul>
                        <li>Sväljsvårigheter</li>
                        <li>Afasi (språkliga svårigheter efter hjärnskada)</li>
                        <li>Dysartri (talsvårigheter efter hjärnskada)</li>
                        <li>Röststörningar (heshet, rösttrötthet, svag röst)</li>
                    </ul>
              

                <div>
                    <h4>Jag gör också hembesök i Stockholmsområdet</h4>
                    <p>För patienter som har svårt att ta sig till en mottagning erbjuder jag hembesök i södra Stockholm och Stockholms innerstad. Detta gäller både för utredningar och behandlingar av sväljningssvårigheter, afasi, dysartri och röststörningar.</p>
                    <p>Kontakta mig för mer information eller tidsbokning.</p>
                </div>
                </div>
            </div>
        </div>
      
    );
}

export default TextWeOffer;
