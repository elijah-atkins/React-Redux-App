import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {

    return(
    <footer className="footer">
        <p>Copyright Elijah Atkins {year}</p>
    </footer>
    )
    
}

export default Footer;