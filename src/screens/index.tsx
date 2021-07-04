import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import EpisodesScreen from './episodes';
import CharactersScreen from './characters';
import LocationsScreen from './locations';

const Tab = createBottomTabNavigator();

export default function IndexScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Episodes" component={EpisodesScreen} />
      <Tab.Screen name="Characters" component={CharactersScreen} />
      <Tab.Screen name="Locations" component={LocationsScreen} />
    </Tab.Navigator>
  );
}
