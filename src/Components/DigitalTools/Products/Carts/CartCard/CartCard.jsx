import React from 'react';
import designTool from "./../../../../../assets/products/design-tool.png";
import operation from "./../../../../../assets/products/operation.png";
import portfolio from "./../../../../../assets/products/portfolio.png";
import shoppingCart from "./../../../../../assets/products/camera.png";
import socialMedia from "./../../../../../assets/products/social-media.png";
import writing from "./../../../../../assets/products/writing_23274001.png";
import ToastAleart from '../../../../UI/ToastAleart/ToastAleart';
import { toast } from 'react-toastify';


const productIcons = {
    "Design": designTool,
    "Automation": operation,
    "Resume": portfolio,
    "Camera": shoppingCart,
    "Social": socialMedia,
    "Writing": writing,
};

const CartCard = ({ add2Cart, setAdd2Cart, item }) => {
    // setTotaPrice(totalPrice+item.price);
    // console.log(totalPrice);
    const { name, price, icon, id } = item;
    console.log(item);

    const removeItem = (id) => {
        const restItem = add2Cart.filter(item => item.id !== id);
        const message = <div>{name} remove from the cart</div>;
        setAdd2Cart(restItem);
        toast.error(message);
    };

    return (
        <div className='p-5 rounded-2xl flex justify-between items-center bg-[#f5f5f5]'>
            <div className='flex items-center gap-4'>
                <div className="mb-2 h-12 w-12 rounded-full border border-neutral/10 flex items-center justify-center">
                    <img
                        src={productIcons[icon]}
                        className="w-7 object-contain"
                        alt={name}
                    />
                </div>
                <div>
                    <p className='text-lg font-bold'>{name}</p>
                    <p className='text-neutral/50'>${price}</p>
                </div>
            </div>
            <button
                className='btn btn-error btn-soft'
                onClick={() => removeItem(id)}
            >
                Remove
            </button>
        </div>
    );
};

export default CartCard;