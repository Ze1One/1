import React from 'react';
import './styles.scss';


const MainTitle = (props) => {

    const { 
        title, 
        subtitle
    } = props;

    return (
        <div className='container about' >
            <div className="row col-12 text-center about__title">
                <h2 className='about__title'>{title}</h2>
                <p >{subtitle}</p>
            </div>
        </div>

    )

};
export default MainTitle;