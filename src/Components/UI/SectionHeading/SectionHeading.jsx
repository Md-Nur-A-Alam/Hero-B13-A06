import React from 'react';

const SectionHeading = ({title, desc}) => {
    return (
        <div className='my-5 text-center'>
            <h1 className='text-4xl font-black'>{title}</h1>
            <p className='text-neutral/50 p-2 text-[12px]'>{desc}</p>
        </div>
    );
};

export default SectionHeading;