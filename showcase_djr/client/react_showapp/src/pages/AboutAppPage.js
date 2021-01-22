import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'


function AboutAppPage () {
	return (
        <div className="AboutAppPage">
            <div className="App-navbar">
                <NavBar />
            </div>

            <About />

            
            <div className="App-footer">
                <Footer />
            </div>
        </div>
	);     
}

export default AboutAppPage