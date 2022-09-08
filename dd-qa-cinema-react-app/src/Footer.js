import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';


function Footer(){
    return(

        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>
                            <Link to='/'>Home</Link>
                        </h2>
                    </div>
                    <div class='footer-link-items'>
                        <h2>About</h2>
                        <Link to='/about'>Who we Are</Link>
                        <Link to='/location'>Opening times</Link>
                        <Link to='/location'>Location</Link>
                        <Link to='/classification'>Film classifications</Link>
                    </div>

                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/Contact'>Email</Link>
                    </div>

                </div>

                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram <AiFillInstagram/> </Link>
                        <Link to='/'>Twitter <AiFillTwitterCircle/> </Link>
                        <Link to='/'>Facebook <AiFillFacebook/> </Link>
                        <Link to='/'>Youtube <AiFillYoutube/> </Link>
                    </div>
                </div>

            </div>
        </div>

    );
}


export default Footer;