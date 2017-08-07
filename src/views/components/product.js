import React from 'react';

const Product = ({image, productLabel, title, description, priceLabel, currency, price, ctaLink, cta}) => (
    <div className={'col product-card'}>
        <img src={`/dist/${image.path}`} alt={image.alt} />
        <p className={'productionLabel'}>{productLabel}</p>
        <h1>{title}</h1>
        <p className={'description'}>{description}</p>
        <p className={'priceLabel'}>{priceLabel}:<span>{currency}{price.toFixed(2)}</span></p>
        <a href={ctaLink} className={'cta'}>{cta}</a>
    </div>
);

export default Product;
