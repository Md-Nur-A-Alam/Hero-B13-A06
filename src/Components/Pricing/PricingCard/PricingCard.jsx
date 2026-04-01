import React from 'react';

const PricingCard = ({ plan }) => {
    const { name, tagline, price, currency, billingCycle, isMostPopular, features, buttonText } = plan;
    return (
        <div >
            <div className="card bg-base-100 shadow-sm rounded-2xl h-full transform transition duration-300 hover:scale-110">
                <div className={`card-body text-left flex flex-col ${!isMostPopular ?
                    null : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                    } rounded-2xl h-full relative`}>
                    {
                        isMostPopular ?
                            <span className="badge badge-xs badge-warning text-center absolute -top-2 left-[40%]">Most Popular</span> :
                            null}

                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className="text-[12px] font-thin -mt-2">{tagline}</p>
                    <div className="mt-3"><span className='text-2xl font-bold'>{currency}{price}</span><span className='text-md font-thin'>/{billingCycle}</span></div>

                    <ul className="mt-6 flex flex-col gap-2 text-xs grow">
                        {features.map((feature, index) =>
                            <li key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>
                        )}

                    </ul>
                    <div className="mt-6">
                        <button className={`btn btn-block ${isMostPopular ?
                            "bg-white" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                            } rounded-full`}><span className={isMostPopular ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent" : ""}>{buttonText}</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;