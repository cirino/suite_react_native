import React from 'react';
import { View } from 'react-native';
import './src/styles/index';
import './src/styles/statusbar';

import Header from './src/components/Header';
import RoutePages from './src/Routes/routes';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <RoutePages />
    </View>
  );
};

export default App;
