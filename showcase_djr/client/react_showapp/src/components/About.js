import React from "react";
import image1 from '../images/img6.jpg'

function About () {
    return (
        <div className="container-fluid h-800" style={{backgroundImage: `url(${image1})`}}>
            <div className="row">
                <div className="col-12">
                    <div className="topPages mt-5">
                    
                        <section>
                            <hr className="style-eight mt-5 mb-5"/>
                            <div className="container">
                                <div class="row justify-content-center">
                                    <div class="col-sm-8 my-5">
                                        <div className="card bg-light my-5 shadow p-2 rounded mb-5 mt-5">
                                    
                                            <div className="card-body text-center">

                                                <div>L'application Birdmania a été développée dans le but d'aider toute personne participant à l'étude et au maintien de la biodiversité dans le parc de la CitéU à Paris.</div>
                                                <br/>
                                                <div>Elle regroupe des informations (descriptions, audios et images) des 52 espèces d'oiseaux recensées dans cet environnement très particulier.</div>
                                                <br/>
                                                <div>Ces informations permettront un suivi des espèces plus aisé et ainsi aideront à leur bonne préservation.</div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="style-eight mt-5 mb-5"/>
                        </section>

                    </div>
                </div>
            </div>
        </div>

);     
}

export default About