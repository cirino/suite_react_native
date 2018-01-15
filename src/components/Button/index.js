import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const ButtonPersonalizado = ({ style, children, type, target }) => (
  <TouchableOpacity
    style={[
      styles.container,
      style,
      type ? styles[`button-${type}`] : {},
    ]}
    onPress={ target }
  >
    <Text style={[
      styles.text,
      type ? styles[`text-${type}`] : {},
    ]}>
      { children }
    </Text>
  </TouchableOpacity>
);

const ButtonTabuada = ({ style, children, type, target }) => (
  <TouchableOpacity
    style={[
      styles.tabuada,
      style,
      type ? styles[`button-${type}`] : {},
    ]}
    onPress= { target }
  >
    <Text style={[
      styles.text,
      type ? styles[`text-${type}`] : {},
    ]}>
      { children }
    </Text>
  </TouchableOpacity>
);

export { ButtonPersonalizado, ButtonTabuada };
