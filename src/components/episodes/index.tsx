import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Container, Card, Searchbar} from '../_root';
import {useEpisodes} from '../../_context/episodes';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const {
    episodes,
    setPage,
    getMoreEpisodes,
    loading,
    searchTerm,
    setSearchTerm,
  } = useEpisodes();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const changeOffset = () => {
    if (!loading && currentPage < 3) {
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
      <>
        <Searchbar
          term={searchTerm}
          onTermChange={(newValue: string) => setSearchTerm(newValue)}
        />
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
                navigation={navigation}
                navigationRoute="Episode"
                item={item}
              />
            );
          }}
        />
      </>
    </Container>
  );
}

export default index;
