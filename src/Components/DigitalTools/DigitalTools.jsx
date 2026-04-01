import React, { use, useState } from 'react';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import Products from './Products/Products';
import Carts from './Products/Carts/Carts';



const DigitalTools = ({ fetchDigitalProducts, add2Cart, setAdd2Cart }) => {


    const data = use(fetchDigitalProducts);
    const digitalProducts = data.digitalProducts
    // console.log(add2Cart.length);


    const [productCart, setProductCart] = useState('product');


    const setProductCartDecision = (decision) => {
        setProductCart(decision)
    }





    const active = 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white';
    return (
        <div className='my-20 flex flex-col justify-center w-full max-w-[80%] mx-auto'>
            <SectionHeading title={"Premium Digital Tools"} desc={
                <>
                    Choose from our curated collection of premium digital products designed
                    <br /> to boost your productivity and creativity.
                </>
            }></SectionHeading>

            {/* Button switcher */}
            <div className='w-fit gap-1 flex justify-between mx-auto p-1 border border-gray-200 rounded-full -mt-4'>
                <p className={`btn rounded-full px-5 ${(productCart === 'product') ? active : null}`} onClick={() => setProductCartDecision('product')}>Products</p>
                <p className={`btn rounded-full px-5 ${(productCart !== 'product') ? active : null}`} onClick={() => setProductCartDecision('cart')}>Cart ({add2Cart.length})</p>
            </div>
            <div className='min-h-[50vh]'>
                {(productCart === 'product') ? <Products digitalProducts={digitalProducts} add2Cart={add2Cart} setAdd2Cart={setAdd2Cart}></Products> : <Carts add2Cart={add2Cart} setAdd2Cart={setAdd2Cart}></Carts>}
            </div>
        </div>
    );
};

export default DigitalTools;