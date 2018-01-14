import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import SubHeader from '../components/SubHeader';
import ProductList from '../components/ProductList';

const Home = () => {
    return (
        <ScrollView>
            <SubHeader />
            <ProductList />
        </ScrollView>
    );
};

export default Home;
