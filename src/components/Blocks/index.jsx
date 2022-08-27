import React from 'react';
import {BLOCKS_DATA} from "./constants";
import './styles.scss';

const Blocks = ()=>{

    return (
        <div className='d-flex Awesome'>
            {BLOCKS_DATA.map(({title, id, subtitle, image}) =>(
            <div key={id} className='Awesome__div'>
                <img src={image} alt='icon'></img>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            ))}
        </div>
            
            
       
    )
}

export default Blocks