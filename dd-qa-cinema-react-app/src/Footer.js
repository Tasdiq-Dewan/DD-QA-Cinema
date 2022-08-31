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
                            <Link to='/homepage'>Home</Link>
                        </h2>
                    </div>
                    <div class='footer-link-items'>
                        <h2>About</h2>
                        <Link to='/sign-up'>Who we Are</Link>
                        <Link to='/sign-up'>Opening times</Link>
                        <Link to='/sign-up'>Location</Link>
                        <Link to='/sign-up'>Film classifications</Link>
                    </div>

                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Email</Link>
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