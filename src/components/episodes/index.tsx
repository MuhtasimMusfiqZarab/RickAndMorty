import React from 'react';
import {FlatList} from 'react-native';

import {Container, Card} from '../_root';

import {useEpisodes} from '../../_context/episodes';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const {episodes} = useEpisodes();

  return (
    <Container>
      <FlatList
        data={episodes}
        showsVerticalScrollIndicator={false}
        keyExtractor={episode => episode?.id}
        renderItem={({item}) => {
          return (
            <Card
              title={item?.name}
              subTitle={`Aired on ${item?.air_date}`}
              navigation={navigation}
              navigationRoute="Episode"
            />
          );
        }}
      />
    </Container>
  );
}

export default index;
