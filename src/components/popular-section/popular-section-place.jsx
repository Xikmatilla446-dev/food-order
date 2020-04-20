import React from 'react';
import { SectionPopular, SectionText, SectionCard} from "./popular-section-styles";
import content from './content';
import CardfoodComponent from "../card/card-food-component";


const PopularSection = () => {





        return (
        <SectionPopular className="section-popular">
            <SectionText>
                <h1>Popular This Month In Your City</h1>
                <p>The easiest way to get your favourite food</p>
            </SectionText>

            <SectionCard className="section-card">
                {content.map((item, index) => (
                    <CardfoodComponent key={index}
                                       item={item}/>
                ))}
            </SectionCard>

        </SectionPopular>
    )
};

export default PopularSection;
