import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {

    return(
    <footer className="footer">
        <p>Weather Data Provided by <a href="https://www.metaweather.com/api/">MetaWeather</a></p>
        <p>Designed and Coded <a href="http://www.elijahatkins.com">Elijah Atkins </a>{year}</p>
    </footer>
    )
    
}

export default Footer;