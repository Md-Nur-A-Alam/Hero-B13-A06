import React, { use } from 'react';
import PricingCard from './PricingCard/PricingCard';
import SectionHeading from '../UI/SectionHeading/SectionHeading';

const Pricing = ({fetchPricingPlans}) => {
    const data = use(fetchPricingPlans);
    const pricingPlans = data.pricingPlans;
    // console.log(data);
    return (
        <div className='w-full max-w-[60%] mx-auto text-center'>
            <SectionHeading
                title = {"Simple, Transparent Pricing"}
                desc  = {"Choose the plan that fits your needs. Upgrade or downgrade anytime."}
            ></SectionHeading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch'>
                {pricingPlans.map(plan => <PricingCard key={plan.id} plan={plan}></PricingCard>)}
            </div>
        </div>
    );
};

export default Pricing;