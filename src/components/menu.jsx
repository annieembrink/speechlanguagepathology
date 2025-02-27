const Menu = ({ setActivePage }) => {
    return ( 
        <div>
            <div id="menuBar">
                <button onClick={() => setActivePage("Hem")}>Hem</button>
                <button onClick={() => setActivePage("Digital vård")}>Digital vård</button>
                <button onClick={() => setActivePage("Vi erbjuder")}>Vi erbjuder</button>
                <button onClick={() => setActivePage("Priser")}>Priser</button>
                <button onClick={() => setActivePage("Kontakt")}>Kontakt</button>
            </div>
        </div>
    );
}

export default Menu;
