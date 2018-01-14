import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default class Product extends Component {
  render() {
    return (
    <View style={styles.container}>
      <Icon name="ios-checkmark-circle-outline" size={24} style={styles.checkIcon} />
      <View style={styles.imageContainer}>
        <Image source={{ uri: this.props.item.foto}} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{this.props.item.titulo}</Text>
        <Text style={styles.description}>{this.props.item.local_anuncio}</Text>
        <Text style={styles.price}>{this.props.item.valor}</Text>
      </View>
    </View>
    );
  }
}
