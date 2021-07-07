import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {Container, Card} from '../_root';

import {useEpisodes} from '../../_context/episodes';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const {episodes, setPage, getMoreEpisodes, loading} = useEpisodes();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const changeOffset = () => {
    if (!loading) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    getMoreEpisodes();
  }, []);

  return (
    <Container>
      <FlatList
        data={episodes}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          changeOffset();
        }}
        onEndReachedThreshold={0.01}
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
