import React from 'react';
//import { StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from 'react-navigation';

import A from '../Pages/a';
import B from '../Pages/b';
import C from '../Pages/c';
  
//StatusBar.setBarStyle('light-content');

export const Routes = TabNavigator({
    A: {
        screen: A,
    },
    B: {
        screen: B,
        navigationOptions: {
            tabBarLabel: 'B',
            tabBarIcon: ({ tintColor, focused }) => (
              <Ionicons
                name={focused ? 'ios-person' : 'ios-person-outline'}
                size={26}
                style={{ color: tintColor }}
              />
            ),
        },
    },
    C: {
        screen: C,
        navigationOptions: {
            tabBarLabel: 'C',
            tabBarIcon: ({ tintColor }) => (
              <Ionicons
              name={focused ? 'account-circle' : 'account-circle-outline'}
                size={26} 
                style={{ color: tintColor }} 
              />
            ),
        },
    }
})