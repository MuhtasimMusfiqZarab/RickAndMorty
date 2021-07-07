import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {Container, Card, Searchbar} from '../_root';

import {useLocations} from '../../_context/locations';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const {locations, setPage, getMoreLocations, loading} = useLocations();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [term, setTerm] = useState('');

  const changeOffset = () => {
    if (!loading && currentPage < 6) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    getMoreLocations();
  }, []);

  return (
    <Container>
      <>
        <Searchbar
          term={term}
          onTermChange={(newValue: string) => setTerm(newValue)}
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
                title={item?.name}
                subTitle={`Type: ${item?.type}`}
                navigation={navigation}
                navigationRoute="Location"
              />
            );
          }}
        />
      </>
    </Container>
  );
}

export default index;
