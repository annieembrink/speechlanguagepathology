import ContactForm from "./contactForm";

const TextContact = () => {
    return ( <div className="container">
        <div className="containerDiv">
<h3>Kontakt</h3>

            {/* <p>072 538 48 17</p> */}
            <p>webblogopeden@gmail.com</p>
            <p>Stockholm</p>

            <ContactForm></ContactForm>
        </div>
    </div> );
}
 
export default TextContact;