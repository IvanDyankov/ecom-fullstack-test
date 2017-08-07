import React from 'react';
import axios from 'axios';
import Product from './components/product';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentWillMount() {
        axios.get('/api/products')
            .then((response) => {
                this.setState({products: response.data});
            })
            .catch(() => {
                this.setState({err: true});
            });
    }

    render() {
        return (
            <section className={'wrapper row'}>
                {
                    this.state.products.map((item, i) => {
                        return <Product key={i} {...item} />
                    })
                }
            </section>
        );
    }
}

export default HomePage;
