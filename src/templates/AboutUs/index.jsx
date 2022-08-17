import React from 'react';
// import AboutUs from "../AboutUs";

import './style.scss';

const AboutUs = (props) => {
    const { title, subtitle } = props;
    return (
        <div className='about'>
            <h1 className='about__title'>{title}</h1>
            <div>
                <p className='about__content'>{subtitle}</p>>
            </div>
        </div>

    )
};

export default AboutUs;