import React from "react";
import { useState } from "react";
import { OURS_DATA } from './constants';
import Button from '../../components/Button';
import MainTitle from "../../components/MainTitle";
import { OURST_DATA } from '../../templates/Our services/constants';
import Modal from 'react-bootstrap/Modal'
import './style.scss';

const cardStyles = {
    active: {
        backgroundColor: 'green',
        color: 'white',
    },
    passive: {
        backgroundColor: 'white',
        color: 'black',
    }
}

const OurService = () => {
    const [cardStyle, setCardStyle] = useState();

    function changeStyles(id) {
        setCardStyle(id)
    }

    return (
        <div className="container d-flex flex-wrap ourservices">
            <MainTitle
                title={OURST_DATA.title}
                subtitle={OURST_DATA.subtitle}
            />
            {OURS_DATA.map(({ id, title, subtitle, image }) => (
                <div
                    onMouseMove={() => changeStyles(id)}
                    key={id}
                    className="container row col-3 p-5 m-5"
                    style={id === cardStyle ? cardStyles.active : cardStyles.passive}
                >
                    <img style={{ width: '20px' }} src={image} alt='img' />
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                    <Button
                        label='READ MORE'
                        btnStyle='dark'
                        buttonClick={() => console.log('hi')      }
                    />

                </div>
            ))}
            <div className='viewall'>
                <Button

                    label='VIEW ALL'
                    btnStyle='dark'
                    buttonClick={() => console.log('hi')}
                />
            </div>

        </div>
    )
}


export default OurService;