import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {Container, Card, Searchbar, Dropdown} from '../_root';

import {useCharacters} from '../../_context/characters';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const {
    characters,
    setPage,
    getMoreCharacters,
    loading,
    searchTerm,
    setSearchTerm,
    totalPages,
    currentPage,
    value,
    setValue,
  } = useCharacters();

  const [items, setItems] = useState([
    {label: 'Alive', value: 'Alive'},
    {label: 'unknown', value: 'unknown'},
    {label: 'Dead', value: 'Dead'},
  ]);

  const changeOffset = () => {
    if (!loading && currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  };

  useEffect(() => {
    getMoreCharacters();
  }, []);

  return (
    <Container>
      <>
        <Searchbar
          term={searchTerm}
          onTermChange={(newValue: string) => setSearchTerm(newValue)}
        />
        <Dropdown
          items={items}
          setItems={setItems}
          value={value}
          setValue={setValue}
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
