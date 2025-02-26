import '../style.css';  // Relativ sökväg från HomePage.js

const HomePage = () => {
    return ( 

        <div id="headerContainer">
            <div id="headerName">
                <div id='imgDiv'>
            {/* <img src="/img/bytesize--book.svg" alt="" id='headerImg'/> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 6.59q-2-1.09-4-1.09c-2 0-2.667.364-4 1.09v9.91q2-1 4-1c2 0 2.667.333 4 1zm-8 0q-2-1.09-4-1.09c-2 0-2.667.364-4 1.09v9.91q2-1 4-1c2 0 2.667.333 4 1z" stroke-width="0.5"/></svg>

            </div>
                <h1 id='headerH1'>Folklogopedi</h1>
            </div>
            <div id='rightElements'>
            <div id="headerTagline">
                <img src="" alt="" />
                <h3>Din dyslexilogoped över hela Sverige</h3>
            </div>
            <div id="headerContact">
                <h4>072 538 48 17</h4>
                <h4>folklogopedi@gmail.com</h4>
            </div>
            </div>
        </div>

     );
}
 
export default HomePage;