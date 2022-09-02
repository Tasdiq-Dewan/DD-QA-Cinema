import React, { Component, useState } from 'react'
import {Link} from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './Navbar.css'


class Navbar extends Component {

    state = { clicked: false }
    button = {setButton: true}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    closeMobileMenu = () => {
        this.setState({clicked: false})
    }

    showButton = () => {
        if(window.innerWidth <= 960){
            this.setState({setButton: false})
        } else {
            this.setState({setButton: true})
        }
    };

   


    render(){
        return(
            <nav className="NavbarItems">
                <Link to="/" className='navbar-logo'>
                    QA-Cinemas
                </Link>
                <div className="menu-icon" onClick={this.handleClick}>
                <span className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></span>
                </div>
                <ul className = {this.state.clicked? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                        <li key={index} >
                            <a className={item.cName} href={item.url}>
                            {item.title}
                            </a>  
                        </li> 
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar