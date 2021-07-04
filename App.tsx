import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';

import Home from './components/Home';

//this is stack
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

//this is bottom tab navigation
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Characters" component={Home} />
      <Tab.Screen name="Episodes" component={Home} />
      <Tab.Screen name="Locations" component={Home} />
    </Tab.Navigator>
  );
}

const App = () => {
  return <NavigationContainer>{MyTabs()}</NavigationContainer>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
