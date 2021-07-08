import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {Container, Card, Searchbar, Dropdown} from '../_root';

import {useLocations} from '../../_context/locations';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const {
    locations,
    setPage,
    getMoreLocations,
    loading,
    searchTerm,
    setSearchTerm,
    totalPages,
    currentPage,
  } = useLocations();

  const changeOffset = () => {
    if (!loading && currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  };

  useEffect(() => {
    getMoreLocations();
  }, []);

  return (
    <Container>
      <>
        <Searchbar
          term={searchTerm}
          onTermChange={(newValue: string) => setSearchTerm(newValue)}
        />
        <FlatList
          data={locations}
          showsVerticalScrollIndicator={false}
          onEndReached={() => {
            changeOffset();
          }}
          keyExtractor={location => location?.id}
          renderItem={({item}) => {
            return (
              <Card
                navigation={navigation}
                navigationRoute="Location"
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
