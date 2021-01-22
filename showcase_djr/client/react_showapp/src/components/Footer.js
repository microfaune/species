import React from "react";
import './Footer.css'
import iconFB from '../images/logos/logoFB2.png'
import iconTwT from '../images/logos/Twitter_Logo.png'



function Footer () {
	return (
		<div className="main-footer">
			<div className="container">
				<div className="row">
					{/* column 1 */}
					<div className="col">
						<p className="contact"><a href="http://wazo.fr">Contact us</a></p>
					</div>
					<div className="col"></div>
					{/* column 3 */}
					<div className="col">
						<div className="logo">
							<a href="https://www.facebook.com/CiteOiseaux">
								<img className="d-inline-block" src={iconFB} alt="logo facebook" width="35" height="35"/>
							</a>
							<a href="https://twitter.com/CiteOiseaux">
								<img className="d-inline-block" src={iconTwT} alt="logo twitter" width="26" height="26"/>
							</a>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<p className="copyright">&copy;{new Date().getFullYear()} Birdmania - All Rights Reserved</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;