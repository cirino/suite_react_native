import React from 'react';

import { View, Text, Image, Button } from 'react-native';
import { ButtonPersonalizado } from '../Button';
import Icon from 'react-native-vector-icons/Ionicons';

import Routes from '../../Routes/routes';
import styles from './styles';

const SubHeader = () => (
  <View style={styles.container}>
    <View style={styles.profileContainer}>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://mandiocafrita.files.wordpress.com/2011/05/viva_o_amor.jpeg' }}
      />

      <View style={styles.profileInfo}>
        <Text style={styles.name}>Mirele Cirino</Text>
        <Text style={styles.bio}>Mulher da minha vida. Te amo muito meu amor, coração, sonho :)</Text>

        <View style={styles.buttonContainer}>
          <ButtonPersonalizado 
            style={styles.firstButton} 
            target={() => alert("Lembre-se ...\nTe amo!")}>
              Mensagem
          </ButtonPersonalizado>
          <ButtonPersonalizado type="outline">
            Seguir
          </ButtonPersonalizado>
        </View>
      </View>
    </View>
  </View>
);

export default SubHeader;
