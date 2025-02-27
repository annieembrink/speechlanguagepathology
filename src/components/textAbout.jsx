const TextAbout = () => {
    return ( <div className="container">
        <div className="containerDiv" id="flex">
            <div id="profileImageDiv">
                <img src="/img/profilbild2.jpg" alt="" />
            </div>
        <div className="aboutText">
        <p>Jag är legitimerad logoped sedan 2016. Med erfarenhet inom  läs- och skrivsvårigheter samt kommunikation och sväljning hos vuxna, erbjuder jag individuellt anpassad logopedisk hjälp i privat regi.</p>
        
        {/* <p>
        Eftersom verksamheten ej har avtal med landstinget, innebär det att du som patient själv står för kostnaden. Fördelen är kortare väntetider, större flexibilitet och en mer personlig vårdupplevelse där vi tillsammans skapar en plan utifrån dina behov och önskemål.  Du behöver ingen remiss för att komma till oss.</p> */}
       
      </div></div>
    </div> );
}
 
export default TextAbout;