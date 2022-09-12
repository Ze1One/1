import React from "react";
import ButtonComponent from "../Button";

import './styles.scss';

const PriceCard = ({ id, title, price, period, options, btnLabel, btnStyle}) => {
    return (
        <>
            <div key={id} className="card">
                <div className="">
                    <div className="row">
                        <div className="col-12 card__top">
                            <h4>{title}</h4>
                            <p>
                                <span>{price}</span>
                                <span>{period}</span>
                            </p>
                        </div>
                        {options.map((item, index) => (
                            <div key={index} className="col-12">
                                <p className="card__option">{item}</p>
                            </div>
                        ))}
                        <div className="col-12">
                            <ButtonComponent 
                                label={btnLabel}
                                buttonClick={() => console.log('click')}
                                btnStyle={btnStyle}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceCard;