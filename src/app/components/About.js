import React from 'react';

require ("./About.scss");

const About = (props) => {
    return (
        <div>
            <h4>Little About Us</h4>
            <p className='test'>Our mission is to make geo data open and available through easy to use cloud products and APIs to inspire new innovative applications with imagery, weather data, and other data feeds that are instantly available for you. A lot of new features are coming soon.</p>
        </div>
    );
}

export default About;