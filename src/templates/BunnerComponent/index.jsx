import React, { useState } from 'react';
import Button from '../../components/Button';
import './styles.scss';


const Bunner = () => {

    const [move, setMove] = useState();
}


const BunnerComponent = (props) => {

    const { title, subtitle } = props;


    return (
        <div className='container bunner'>
            <div className='row col-12 text-center'>
                <h1 className='bunner__title'>{title}</h1>
                <p className='bunner__subtitle'>{subtitle}</p>
            </div>
            <div className='container'>
                <div className='container d-flex col-3'>
                    <Button
                        label='OUR SERVICES'
                            />
                    <Button
                        label='HIRE IS NOW'
                            />
                </div>
            </div>
        </div>



    )
}

export default BunnerComponent
