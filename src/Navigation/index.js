import React from "react";
import 'bulma/css/bulma.css';
import Logo from './logo.png';
import './navigation.css'
import {Helmet} from "react-helmet";


const Header = () => (
    
    <header>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Galonku</title>

            </Helmet>
        <nav className="navbar" role="navigation" aria-label="main navigation">

            <img className='logo-height' src={Logo} />

        </nav>
    </header>


)

export default Header;