import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
    return (
        <View style={styles.container}>
            <Icon name='ios-arrow-back' size={24} style={styles.icon} />
            <Text style={styles.title}>Inicio</Text>
            <Icon name='ios-more' size={24} style={styles.icon} />
        </View>
    );
};

export default Header;
