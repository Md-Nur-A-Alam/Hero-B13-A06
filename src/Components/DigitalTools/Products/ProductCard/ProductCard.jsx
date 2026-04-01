import React from 'react';
import designTool from "./../../../../assets/products/design-tool.png";
import operation from "./../../../../assets/products/operation.png";
import portfolio from "./../../../../assets/products/portfolio.png";
import shoppingCart from "./../../../../assets/products/camera.png";
import socialMedia from "./../../../../assets/products/social-media.png";
import writing from "./../../../../assets/products/writing_23274001.png";
import ToastAleart from '../../../UI/ToastAleart/ToastAleart';
import { toast } from 'react-toastify';


const productIcons = {
    "Design": designTool,
    "Automation": operation,
    "Resume": portfolio,
    "Camera": shoppingCart,
    "Social": socialMedia,
    "Writing": writing,
};


const setAdd2CartBTN = ({ add2Cart, setAdd2Cart, product }) => {
    // console.log("btn clicked", add2Cart.length);
    const message = <div className='flex flex-col'><p className='font-bold text-center'>{product.name} </p><p>- added to the cart</p></div>
    toast.success(message);
    return setAdd2Cart([...add2Cart, product]);

}

const ProductCard = ({ product, add2Cart, setAdd2Cart }) => {
    const { name, icon, badge, description, price, billingCycle, features, buttonText } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm rounded-2xl h-full transform transition duration-300 hover:-translate-y-2 hover:scale-105">
                <div className={`card-body text-left flex flex-col rounded-2xl h-full relative`}>
                    <span className={`badge badge-xs ${(badge === 'Best Seller') ? 'badge-warning' : (badge === 'Popular') ? 'badge-primary' : 'badge-success'} absolute top-4 right-4`}>{badge}</span>

                    <div className="mb-2 h-12 w-12 rounded-full border border-neutral/10 flex items-center justify-center">
                        <img
                            src={productIcons[icon]}
                            className="w-7 object-contain"
                            alt=""
                        />
                    </div>

                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className="text-[12px] font-thin -mt-2">{description}</p>
                    <div className="mt-3"><span className='text-2xl font-bold'>${price}</span><span className='text-md font-thin'>/{billingCycle}</span></div>

                    <ul className="mt-6 flex flex-col gap-2 text-xs grow">
                        {features.map((feature, index) =>
                            <li key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>
                        )}

                    </ul>
                    <div className="mt-6">
                        {!add2Cart.includes(product) ?
                            <button className={`btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full`} onClick={() => setAdd2CartBTN({ add2Cart, setAdd2Cart, product })}>{buttonText}</button> :
                            <button className={`btn btn-block bg-linear-to-r from-[#0bc760] to-[#26d403] text-white rounded-full`}>Already added to the cart</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;