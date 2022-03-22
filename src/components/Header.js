import React from 'react'
import ThemeToggler from './ThemeToggler';

const Header = () =>{
    return(
        <header style={{textAlign: "center"}}>
            <h1>Theme Toggle </h1>
            <p>Switch Mode as</p>
            
            <ThemeToggler/>
        </header>
    );
};

export default Header;