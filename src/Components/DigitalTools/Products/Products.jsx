import React from 'react';
import ProductCard from './ProductCard/ProductCard';

const Products = ({digitalProducts,add2Cart, setAdd2Cart}) => {
    // console.log(add2Cart.length);
    return (
        <div  className='min-h-[50vh] rounded-2xl my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch'>
            {digitalProducts.map(product => <ProductCard key={product.id} product={product} add2Cart={add2Cart} setAdd2Cart={setAdd2Cart}></ProductCard>)}
        </div>
    );
};

export default Products;