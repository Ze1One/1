import React from 'react';
import BunnerComponent from '../BunnerComponent';
import MainTitle from "../../components/MainTitle";
import AboutUsItem from '../../components/AboutUsItem';
import OurService from '../Our services';
import PricingPlan from '../PricingPlan';
import { ABOUTUS_DATA } from '../../components/MainTitle/constants';
import { BLOCKS__DATA } from '../../components/AboutUsItem/constants';
import { BUNNER__DATA } from '../../templates/BunnerComponent/constants';




const AboutUs = () => {

    return (
        <>
            <BunnerComponent
                title={BUNNER__DATA.title}
                subtitle={BUNNER__DATA.subtitle}

            />


            <MainTitle
                title={ABOUTUS_DATA.title}
                subtitle={ABOUTUS_DATA.subtitle}
            />
            <div  className=" container d-flex">
                {BLOCKS__DATA.map(({ title, id, subtitle, image }) => (
                    <div key={id}>
                        <AboutUsItem
                            title={title}
                            id={id}
                            subtitle={subtitle}
                            image={image}
                        />
                    </div>
                ))}
            </div>
            <OurService
                        />
            <PricingPlan
            />
                        
           
        </>
    )
};

export default AboutUs; 