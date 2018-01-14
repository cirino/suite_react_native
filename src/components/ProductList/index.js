import React, { Component } from 'react';
import { View } from 'react-native';

import axios from 'axios';

import Product from './Product';
import styles from './styles';

export default class ProductList extends Component {

	constructor(props) {
		super(props);

		this.state = { produtosItens: [] };
	}

	componentWillMount() {
		//requisção HTTP
		axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
			.then(response => { this.setState({ produtosItens: response.data }); })
			.catch(() => { console.log('Erro ao recuperar os dados'); });
	}

  /*
  state = {
        products: [
          {
            id: 1,
            image: 'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=28010875',
            title: 'Acne Studios',
            description: 'Andrea nappa dusty pink',
            price: 'R$50,00',
          },
          {
            id: 2,
            image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
            title: 'Acne Studios',
            description: 'Lain pop sky blue',
            price: 'R$70,00',
          },
          {
            id: 3,
            image: 'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=28010875',
            title: 'Acne Studios',
            description: 'Andrea nappa dusty pink',
            price: 'R$30,00',
          },
          {
            id: 4,
            image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
            title: 'Acne Studios',
            description: 'Lain pop sky blue',
            price: 'R$70,00',
          },
          {
            id: 5,
            image: 'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=28010875',
            title: 'Acne Studios',
            description: 'Andrea nappa dusty pink',
            price: 'R$30,00',
          },
          {
            id: 6,
            image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
            title: 'Acne Studios',
            description: 'Lain pop sky blue',
            price: 'R$70,00',
          }
        ],
    };
*/
    render() {
        return (
          <View style={styles.container}>
            { this.state.produtosItens.map(item => (
            <Product key={item.titulo} item={item} />)
          )}
          </View>
        );
    }
}