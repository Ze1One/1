import React from 'react';
import { ABOUTUS_DATA } from './constants';
import Blocks from '../Blocks';
import './styles.scss';


const MainTitle = () => {

    return (
        <div className='container about' >
            <div className="row col-12 text-center about__title">
                <h1 className='about__title'>{ABOUTUS_DATA.title}</h1>
                <p >{ABOUTUS_DATA.subtitle}</p>
            </div>
            <div className='text-center about__content'>
                   <Blocks />
            </div>
        </div>

    )

};
export default MainTitle;