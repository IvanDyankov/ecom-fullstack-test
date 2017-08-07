import React from 'react';
import {shallow, mount} from 'enzyme';
import proxyquire from 'proxyquire';
import Product from '../../src/views/components/product';


/* THESE TESTS ARE ONLY SLIGHTLY BETTER THAN PSEUDO CODE AND JUST DEMONSTRATE THE APPROACH */
// I was not able to run the jest tests due to: Unexpected token import

describe('<HomePage />', () => {
    const axiosGet = jest.fn();
    const validProducts = [{
        title: "Simple Canvas",
        description: "Lets your pictures speak for themselves.",
        image: {
            path: "/images/product.jpg",
            alt: "Simple Canvas"
        },
        price: 1500,
        currency: "£",
        priceLabel: "From",
        productLabel: "bestseller",
        cta: "Shop Now",
        ctaLink: "/random/link/to/no/where"
    }, {
        title: "Collage Canvas",
        description: "Can't choose just one pic? Put your favourite photos on one canvas - a collage.",
        image: {
            path: "/images/product.jpg",
            alt: "Collage Canvas"
        },
        price: 2500,
        currency: "£",
        priceLabel: "From",
        productLabel: "",
        cta: "Shop Now",
        ctaLink: "/random/link/to/no/where"
    }];

    const HomePage = proxyquire('../../src/views/HomePage', {
        axios: {
            get: axiosGet
        }
    });

    test('should render the correct ', () => {
        const page = shallow(<HomePage />);
        expect(page.find('.wrapper')).to.have.length(1);
    });

    test('should get prodcuts data', () => {
        const page = mount(<HomePage />);
        expect(axiosGet.mock.calls.length).toBe(1);
    });

    test('should render the correct number of Products', () => {
        axiosGet.mockReturnValueOnce(validProducts);
        const page = mount(<HomePage />);
        expect(page.find(Product)).to.have.length(2);
    });

    test('should not render any Products when axios call fails', () =>{
        axiosGet.mockReturnValueOnce(new Error('Service Unavailable'));
        expect(page.find(Product)).to.have.length(0);
    });
});
