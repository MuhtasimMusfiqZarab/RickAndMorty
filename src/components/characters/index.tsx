import React from 'react';
import {FlatList} from 'react-native';

import {Container, Card} from '../_root';

import {useCharacters} from '../../_context/characters';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const {characters} = useCharacters();

  return (
    <Container>
      <FlatList
        data={characters}
        keyExtractor={character => character?.id}
        renderItem={({item}) => {
          return (
            <Card
              title={item?.name}
              subTitle={`name: ${item?.name}`}
              navigation={navigation}
              navigationRoute="Character"
            />
          );
        }}
      />
    </Container>
  );
}

export default index;
