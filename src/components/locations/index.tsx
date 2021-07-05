import React from 'react';
import {FlatList} from 'react-native';

import {Container, Card} from '../_root';

import {useLocations} from '../../_context/locations';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const {locations} = useLocations();

  return (
    <Container>
      <FlatList
        data={locations}
        showsVerticalScrollIndicator={false}
        keyExtractor={location => location?.id}
        renderItem={({item}) => {
          return (
            <Card
              title={item?.name}
              subTitle={`Type: ${item?.type}`}
              navigation={navigation}
              navigationRoute="Location"
            />
          );
        }}
      />
    </Container>
  );
}

export default index;
