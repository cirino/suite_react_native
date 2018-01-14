import React from 'react';
import { View, ScrollView } from 'react-native';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ProductList from './components/ProductList';
import Tabs from './components/Tabs';

export default class RouteApp extends React.Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView>
                <SubHeader />
                <ProductList />
            </ScrollView>
            <Tabs />
        </View>
    );
  }
}