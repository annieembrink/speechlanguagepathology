const TextHomePage = () => {
    return (
        <>
       {/* <h3 className="marginTopAndBottom">Hem</h3> */}
      <div className="container">
       
        <div className="containerDiv">
          <div>
            <h2 className="welcome marginBottom">Välkommen till Webblogopeden</h2>
            <h4 className="welcome small">
              Jag erbjuder logopedisk vård online – oavsett var i Sverige du bor.
            </h4>
          </div>
  
          <div className="marginTopAndBottom">
            <h4>Vad jag kan hjälpa dig med:</h4>
            <ul>
              <li>Utredning av läs- och skrivsvårigheter</li>
              <li>Utredning av språkliga och kommunikativa svårigheter</li>
              <li>Individuell rådgivning och stöd utifrån dina behov</li>
              <li>Intyg inför till exempel högskoleprovet</li>
            </ul>
          </div>
  
          <div className="marginTopAndBottom">
            <h4>Kontakta mig</h4>
            <p className="marginBottom">
              Varmt välkommen att höra av dig om du har frågor eller vill boka en tid.
            </p>
            <p className="italic">webblogopeden@gmail.com</p>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default TextHomePage;
  