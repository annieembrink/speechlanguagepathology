const TextPrices = () => {
    return ( <div className="container">
        <div className="containerDiv">

<h3>Priser och betalning</h3>


<h4>Utredningar</h4>
- Läs- och skrivutredning: 8 000 kr
<br></br>
- Utredning språkstörning: 8 000 kr

 <h4>Intyg</h4>
- Intyg till högskoleprovet: 1000kr

<h4>Betalning</h4>
<p>
Jag fakturerar via extern tjänst. Fakturan skickas efter genomförd utredning eller behandling och ska betalas inom 30 dagar.</p>

<h4>Övrigt</h4>
<p>Du behöver ingen remiss för att komma till mig.</p></div>

<div className="containerDiv">
    {/* <p className="marginTopAndBottom">
Eftersom verksamheten ej har avtal med landstinget, innebär det att du som patient själv står för kostnaden.</p>  */}

<p className="marginTopAndBottom">Fördelen med privat vård är kortare väntetider, att jag kan ta emot patienter från hela Sverige och ha verksamheten helt online Det innebär större flexibilitet och en mer personlig vårdupplevelse där vi tillsammans skapar en plan utifrån dina behov och önskemål.</p>



<br />
<p className="italic">Om du har frågor om priser eller betalning är du välkommen att kontakta mig!</p>
        </div>
    </div> );
}
 
export default TextPrices;