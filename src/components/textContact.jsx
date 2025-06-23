import ContactForm from "./contactForm";

const TextContact = () => {
    return ( <div className="container">
        {/* <div className="containerDiv"> */}
<h3>Kontakta mig för frågor eller bokning av tid</h3>

            {/* <p>072 538 48 17</p> */}
           
            <ContactForm></ContactForm>
            <br></br>
            <p>webblogopeden@gmail.com</p>
            <p>Stockholm</p>
        {/* </div> */}
    </div> );
}
 
export default TextContact;