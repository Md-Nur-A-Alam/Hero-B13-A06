import React from 'react';
import user from "./../../assets/user.png";
import box from "./../../assets/package.png";
import rocket from "./../../assets/rocket.png";
import SectionHeading from '../UI/SectionHeading/SectionHeading';

const StepsSection = () => {
    return (
        <div>
            <SectionHeading title={"Get Started in 3 Steps"} desc={"Start using premium digital tools in minutes, not hours."}></SectionHeading>
            <div className='my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[80%] mx-auto'>
                <div className='border border-neutral/10 rounded-xl p-8 relative text-center transform duration-300 hover:scale-105 shadow hover:backdrop-blur-3xl'>
                    <p className='text-center absolute top-3 right-3 rounded-full w-7 h-7 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>01</p>
                    <div className='flex flex-col space-y-2 justify-center'>
                        <img src={user} alt="" className='p-2 bg-[#e6c8ee] rounded-full w-15 mx-auto'/>
                        <h1 className="text-xl font-bold">Create Account</h1>
                        <p className="text-neutral/50 text-[12px]">Sign up for free in seconds. No credit card <br /> required to get started.</p>
                    </div>
                </div>
                <div className='border border-neutral/10 rounded-xl p-8 relative text-center transform duration-300 hover:scale-105 shadow hover:backdrop-blur-3xl'>
                    <p className='text-center absolute top-3 right-3 rounded-full w-7 h-7 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>02</p>
                    <div className='flex flex-col space-y-2 justify-center'>
                        <img src={box} alt="" className='p-2 bg-[#e6c8ee] rounded-full w-15 mx-auto'/>
                        <h1 className="text-xl font-bold">Create Account</h1>
                        <p className="text-neutral/50 text-[12px]">Sign up for free in seconds. No credit card <br /> required to get started.</p>
                    </div>
                </div>
                <div className='border border-neutral/10 rounded-xl p-8 relative text-center transform duration-300 hover:scale-105 shadow hover:backdrop-blur-3xl'>
                    <p className='text-center absolute top-3 right-3 rounded-full w-7 h-7 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>03</p>
                    <div className='flex flex-col space-y-2 justify-center'>
                        <img src={rocket} alt="" className='p-2 bg-[#e6c8ee] rounded-full w-15 mx-auto'/>
                        <h1 className="text-xl font-bold">Start Creating</h1>
                        <p className="text-neutral/50 text-[12px]">Download and start using your premium<br /> tools immediately.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StepsSection;