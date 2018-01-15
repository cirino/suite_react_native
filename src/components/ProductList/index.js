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
		axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
			.then(response => { this.setState({ produtosItens: response.data }); })
			.catch(() => { console.log('Erro ao recuperar os dados'); });
	}

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
