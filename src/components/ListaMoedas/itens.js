import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class Itens extends Component {
  render() {
    return (
			<View>
				<Text>Valores com base em 1 BTC</Text>
				<Text>BRL: {this.props.item.BRL}</Text>
				<Text>USD: {this.props.item.USD}</Text>
				<Text>BTX: {this.props.item.BTX}</Text>
				<Text>ETH: {this.props.item.ETH}</Text>
				<Text>LTC: {this.props.item.LTC}</Text>
			</View>
    );
  }
}
