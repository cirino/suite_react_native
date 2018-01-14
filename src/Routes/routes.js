/*import React from 'react';
import { StackNavigator } from 'react-navigation';

import A from '../Pages/a';
import B from '../Pages/b';
import C from '../Pages/c';

const RoutePages = StackNavigator({
    bottomNavigation: { screen: BottomNavigation },
    A: { screen: A,
        navigationOptions: {
            title: 'AA',
       },
    },
    B: { screen: B,
        navigationOptions: {
            title: 'BB',
       },
    },
    C: { screen: C,
        navigationOptions: {
            title: 'CC',
       },
    },
},
{
    headerMode: 'none',
});

export default RoutePages;
*/

import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { View, Button, Text, Footer, FooterTab } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

import Home from "../Pages/Home";
import Tabuada from "../Pages/Tabuada";
import Moedas from "../Pages/Moedas";

export default (RoutePages = TabNavigator(
  {
    Home: { screen: Home },
    Moedas: { screen: Moedas },
    Tabuada: { screen: Tabuada }
  },
  {
    tabBarPosition: "bottom",
    initialRouteName: "Moedas",
    tabBarComponent: props => {
      return (
        <Footer>
            <FooterTab>
                <Button
                    vertical
                    active={props.navigationState.index === 0}
                    onPress={() => props.navigation.navigate("Home")}>
                    <Icon name="user-o" size={16} style={[styles.icon, styles.active]} />
                    <Text>Produtos</Text>
                </Button>
                <Button
                    vertical
                    active={props.navigationState.index === 1}
                    onPress={() => props.navigation.navigate("Moedas")}>
                    <View style={styles.main}>
                    <Icon name="money" size={16} style={styles.mainIcon} />
                    </View>
                </Button>
                <Button
                    vertical
                    active={props.navigationState.index === 2}
                    onPress={() => props.navigation.navigate("Tabuada")}>
                    <Icon name="square" size={16} style={styles.icon} />
                    <Text>Tabuada</Text>
                </Button>
            </FooterTab>
        </Footer>
      );
    }
  }
));