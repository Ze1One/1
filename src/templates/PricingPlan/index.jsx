import React from "react";
import MainTitle from "../../components/MainTitle";
import PriceCard from "../../components/PriceCard";

import { PRICE_CARD_DATA, TITLE_DATA } from "./constant";
import './style.scss';

const PricingPlan = () => {
    return (
        <div className='container Pricing'>
           <MainTitle 
                title={TITLE_DATA.title}
                subtitle={TITLE_DATA.subtitle}
           />
            <div className="container">
                <div className="row">
                    {PRICE_CARD_DATA.map(({ id, title, price, period, options, btnLabel, btnStyle }) => (
                        <div key={id} className='col-4 Pricing__card'>
                            <PriceCard
                                id={id} 
                                title={title} 
                                price={price} 
                                period={period} 
                                options={options} 
                                btnLabel={btnLabel} 
                                btnStyle={btnStyle}
                        />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PricingPlan;