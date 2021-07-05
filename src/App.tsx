import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRegistry} from 'react-native';

import {ApolloProvider} from '@apollo/client';
import {client} from './lib/apollo';

import Router from './screens';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ApolloProvider>
  );
};
AppRegistry.registerComponent('rickandmorty', () => App);

export default App;
