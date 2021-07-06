import React from 'react';

import {CharactersProvider} from '../../_context/characters';
import Characters from '../../components/characters';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  return (
    <CharactersProvider>
      <Characters navigation={navigation} route={route} />
    </CharactersProvider>
  );
}

export default index;
