import React from 'react';
import './styles.scss';


const AboutUsItem = ({id, title, subtitle, image}) => {


    return (
        <div className='container'>
            <div key={id} className='text-center Awesome__div'>
                <img src= {image} alt='icon'></img>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>

        </div>



    )
}

export default AboutUsItem