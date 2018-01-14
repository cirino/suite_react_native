import React, { Component } from 'react';
import { View, Text } from 'react-native';

import axios from 'axios';
import Itens from './itens';
import styles from './styles';

export default class ListaMoedas extends Component {

	constructor(props) {
		super(props);

		this.state = { listaMoedas: [] };
	}

	componentDidMount() {
		this._interval = setInterval(() => {
			//requisição HTTP
			axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,BTX,ETH,LTC,USD,BRL')
				.then(response => { this.setState({ listaMoedas: response.data }); })
				.catch(() => { console.log('Erro ao recuperar os dados'); });
		}, 10000);
	}
	
	componentWillUnmount() {
		clearInterval(this._interval);
	}

	componentWillMount(){
		//requisição HTTP
		axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,BTX,ETH,LTC,USD,BRL')
			.then(response => { this.setState({ listaMoedas: response.data }); })
			.catch(() => { console.log('Erro ao recuperar os dados'); });
	}

  render() {
    return (
			<View style={ styles.container }>
				<View style={ styles.destaque }>
					<Text style={ styles.textoDestaque }>R$: {this.state.listaMoedas.BRL}</Text>
				</View>
				<View style={ styles.moedas }>
					<Text>Valores com base em 1 BTC</Text>
					<Text style={ styles.texto }>USD: {this.state.listaMoedas.USD}</Text>
					<Text style={ styles.texto }>BTX: {this.state.listaMoedas.BTX}</Text>
					<Text style={ styles.texto }>ETH: {this.state.listaMoedas.ETH}</Text>
					<Text style={ styles.texto }>LTC: {this.state.listaMoedas.LTC}</Text>
					<Text style={ styles.breve }>Mais moedas em breve.</Text>
				</View>
			</View>
    );
  }
}