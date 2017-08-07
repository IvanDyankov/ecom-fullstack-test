import React from 'react';

class Product extends React.Component {
     constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'col'}>
                <img src={`/dist/${this.props.image.path}`} alt={this.props.image.alt} />
                <p className={'productionLabel'}>{this.props.productLabel}</p>
                <h1>{this.props.title}</h1>
                <p className={'description'}>{this.props.description}</p>
                <p className={'priceLabel'}>{this.props.priceLabel}:<span>{this.props.currency}{this.props.price}</span></p>
                <a href={this.props.ctaLink} className={'cta'}>{this.props.cta}</a>
            </div>
        );
    }
}

export default Product;
