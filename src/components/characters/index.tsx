import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {Container, Card, Searchbar} from '../_root';

import {useCharacters} from '../../_context/characters';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const {characters, setPage, getMoreCharacters, loading} = useCharacters();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [term, setTerm] = useState('');

  const changeOffset = () => {
    if (!loading && currentPage < 34) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    getMoreCharacters();
  }, []);

  return (
    <Container>
      <>
        <Searchbar
          term={term}
          onTermChange={(newValue: string) => setTerm(newValue)}
        />
        <FlatList
          data={characters}
          showsVerticalScrollIndicator={false}
          onEndReached={() => {
            changeOffset();
          }}
          keyExtractor={character => character?.id}
          renderItem={({item}) => {
            return (
              <Card
                navigation={navigation}
                navigationRoute="Character"
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
