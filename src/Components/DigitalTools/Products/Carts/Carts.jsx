import React, { useState } from 'react';

import CartCard from './CartCard/CartCard';
import { toast } from 'react-toastify';

const Carts = ({ add2Cart, setAdd2Cart }) => {
    // console.log(add2Cart);
    const totalPrice = add2Cart.reduce((acc, item) => acc + item.price, 0);


    return (
        <div className='rounded-2xl shadow border border-neutral/5 my-20 p-10'>
            <h1 className='text-xl text-left font-bold mb-10'>Your Cart</h1>
            {(add2Cart.length) ?
                <div>
                    <div className='grid grid-cols-1 gap-2'>
                        {add2Cart.map(item => {
                            return (
                                <CartCard key={item.id} add2Cart={add2Cart} setAdd2Cart={setAdd2Cart} item={item}></CartCard>
                            )
                        })}
                    </div>
                    <div className='mt-5 flex justify-between my-3'>
                        <p className='text-neutral/50'>Total:</p>
                        <p className='text-xl font-bold'>${totalPrice}</p>
                    </div>
                    <button className='btn btn-block rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' onClick={() => { setAdd2Cart([]), toast("The products are proceed to checkout successfully") }}>Proceed TO Checkout</button>
                </div>
                :
                <div className='min-h-[50vh] '>

                </div>}
        </div>
    );
};

export default Carts;