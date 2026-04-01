import React from 'react';
import SectionHeading from '../UI/SectionHeading/SectionHeading';

const WorkFLow = () => {
    return (
        <div className='py-25 text-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-20'>
            <div className="max-w-4xl mx-auto">

                <div className='text-white'>
                    <SectionHeading title={"Ready To Transform Your Workflow?"} desc={"Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today."}></SectionHeading>
                </div>


                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <button className="btn text-[#8B2CFF] rounded-full w-full sm:w-auto shadow-lg">
                        Explore Products
                    </button>

                    <button className="btn btn-outline text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all w-full sm:w-auto">
                        View Pricing
                    </button>
                </div>

                <p className="text-sm opacity-80 text-white">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </div>
    );
};

export default WorkFLow;