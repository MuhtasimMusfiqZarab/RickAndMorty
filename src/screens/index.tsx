import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';
import {FontAwesome} from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import EpisodesScreen from './episodes';
import EpisodeScreen from './episode';
import CharactersScreen from './characters';
import CharacterScreen from './character';
import LocationsScreen from './locations';
import LocationScreen from './location';

const Tab = createMaterialBottomTabNavigator();
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
      <Tab.Screen
        name="Episodes"
        component={EpisodesStack}
        options={{
          tabBarLabel: 'Home',
          // tabBarIcon: ({color}) => <FontAwesome name="search" />,
          // tabBarIcon: ({color}) => <Icon name="plus" size={30} color="#900" />,
          // tabBarIcon: ({color}) => (
          //   <MaterialCommunityIcons name="home" color={color} size={26} />
          // ),
        }}
      />
      <Tab.Screen name="Characters" component={CharactersStack} />
      <Tab.Screen name="Locations" component={LocationsStack} />
    </Tab.Navigator>
  );
}
