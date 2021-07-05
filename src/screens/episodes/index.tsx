import React from 'react';

import {EpisodesProvider} from '../../_context/episodes';
import Episodes from '../../components/episodes';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  return (
    <EpisodesProvider>
      <Episodes navigation={navigation} route={route} />
    </EpisodesProvider>
  );
}

export default index;
