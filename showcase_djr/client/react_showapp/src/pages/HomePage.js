import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Article from '../components/Article'


function HomePage () {
	return (
        <div className="HomePage">
                <div className="App-navbar">
                    <NavBar />
                </div>
                <div className="App-header">
                    <Article />
                </div>
                <div className="App-footer">
                    <Footer />
                </div>
        </div>
	);     
}

export default HomePage