import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import EpisodesScreen from './episodes';
import EpisodeScreen from './episode';
import CharactersScreen from './characters';
import CharacterScreen from './character';
import LocationsScreen from './locations';
import LocationScreen from './location';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const EpisodesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Episodes"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#62a4ab',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Episodes" component={EpisodesScreen} />
      <Stack.Screen name="Episode" component={EpisodeScreen} />
    </Stack.Navigator>
  );
};
const CharactersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Characters"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#62a4ab',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Characters" component={CharactersScreen} />
      <Stack.Screen name="Character" component={CharacterScreen} />
    </Stack.Navigator>
  );
};
const LocationsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Locations"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#62a4ab',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Locations" component={LocationsScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
    </Stack.Navigator>
  );
};

export default function IndexScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Episodes" component={EpisodesStack} />
      <Tab.Screen name="Characters" component={CharactersStack} />
      <Tab.Screen name="Locations" component={LocationsStack} />
    </Tab.Navigator>
  );
}
