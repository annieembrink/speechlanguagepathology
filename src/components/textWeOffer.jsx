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
            <div>
                <p>Väntetider just nu</p>
                <p>1 vecka</p>
                <p>Uppdaterat {currentDate}</p>
            </div>
            
            <div id="textWeOfferContainer">
                <div>
                    <h3>Logopediska tjänster</h3>
                </div>

                <div>
                    <h4>Läs- och skrivutredning</h4>
                    <p>En läs- och skrivutredning syftar till att kartlägga individens språkliga styrkor och svårigheter för att bedöma om det finns tecken på dyslexi eller andra läs- och skrivsvårigheter.</p>
                </div>

                <div>
                    <h4>Hur går en utredning till?</h4>
                    <ul>
                        <li>Inledande samtal – Vi går igenom bakgrund, tidigare erfarenheter och eventuella svårigheter.</li>
                        <li>Testning – Jag genomför en omfattande språk- och läs-/skrivbedömning med standardiserade tester.</li>
                        <li>Återkoppling och skriftligt utlåtande – Efter utredningen får du en detaljerad rapport som beskriver resultaten och rekommendationer.</li>
                        <li>Kommunikation med skolan – Om det gäller ett barn, återkopplar jag till skolan för att ge vägledning kring anpassningar och stödinsatser.</li>
                    </ul>
                    <p>Observera att jag inte förskriver hjälpmedel, men skolan är skyldig att erbjuda anpassningar och stöd utifrån utredningens resultat. Om du är vuxen patient kan jag också ge råd och rekommendationer kring hjälpmedel som du kan införskaffa själv.</p>
                </div>

                <div>
                    <h4>Sväljutredning och behandling</h4>
                    <p>Jag erbjuder utredning och behandling av sväljningssvårigheter (dysfagi), vilket kan uppstå på grund av neurologiska sjukdomar, skador eller andra medicinska tillstånd.</p>
                </div>

                <div>
                    <h4>Hur går en sväljutredning till?</h4>
                    <ul>
                        <li>Bedömning av sväljförmåga – Genom samtal och tester kartlägger vi din förmåga att tugga och svälja.</li>
                        <li>Rådgivning och anpassningar – Du får råd kring kost, sväljstrategier och hur måltidssituationen kan underlättas.</li>
                        <li>Vid behov remiss – Om vidare medicinsk utredning krävs, hjälper jag till med rekommendationer.</li>
                    </ul>
                </div>

                <div>
                    <h4>Behandling av afasi, dysartri och röststörningar</h4>
                </div>

                <div>
                    <h4>Afasi (språkliga svårigheter efter hjärnskada/stroke)</h4>
                    <ul>
                        <li>Språk- och kommunikationsträning för att förbättra tal, förståelse, läsning och skrivning.</li>
                        <li>Strategier för att underlätta vardagen, både för patient och anhöriga.</li>
                    </ul>
                </div>

                <div>
                    <h4>Dysartri (talsvårigheter p.g.a. nedsatt muskelkontroll)</h4>
                    <ul>
                        <li>Träning för att förbättra artikulation och taltydlighet.</li>
                        <li>Andnings- och röstövningar för att stärka talförmågan.</li>
                    </ul>
                </div>

                <div>
                    <h4>Röststörningar (heshet, rösttrötthet, svag röst)</h4>
                    <ul>
                        <li>Röstanalys och individuell behandling för att hitta en hållbar röstteknik.</li>
                        <li>Röstvård och rådgivning för att minska röstbelastning och förebygga problem.</li>
                    </ul>
                </div>

                <div>
                    <h4>Hembesök i södra Stockholm samt Stockholms innerstad</h4>
                    <p>För patienter som har svårt att ta sig till en mottagning erbjuder jag hembesök i södra Stockholm och Stockholms innerstad. Detta gäller både för utredningar och behandlingar av sväljningssvårigheter, afasi, dysartri och röststörningar.</p>
                    <p>Kontakta mig för mer information eller tidsbokning.</p>
                </div>
            </div>
        </div>
    );
}

export default TextWeOffer;
