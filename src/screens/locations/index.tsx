import React from 'react';

import {LocationsProvider} from '../../_context/locations';
import Locations from '../../components/locations';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  return (
    <LocationsProvider>
      <Locations navigation={navigation} route={route} />
    </LocationsProvider>
  );
}

export default index;
