import React from 'react';

const CountsSection = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-around text-white p-10 mb-20'>
            <div className="text-center flex flex-col justify-center">
                <h2 className='text-4xl font-bold'>50K+</h2>
                <p className='font-thin mt-2'>Active Users</p>
            </div>

            <div className="flex divider divider-horizontal before:bg-white/20 after:bg-white/20 h-16 self-center"></div>

            <div className="text-center flex flex-col justify-center">
                <h2 className='text-4xl font-bold'>200+</h2>
                <p className='font-thin mt-2'>Premium Tools</p>
            </div>

            <div className="flex divider divider-horizontal before:bg-white/20 after:bg-white/20 h-16 self-center"></div>

            <div className="text-center flex flex-col justify-center">
                <h2 className='text-4xl font-bold'>4.9</h2>
                <p className='font-thin mt-2'>Rating</p>
            </div>
        </div>
    );
};

export default CountsSection;