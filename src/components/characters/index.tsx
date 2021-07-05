import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useCharacters} from '../../_context/characters';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const {characters} = useCharacters();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={characters}
          keyExtractor={character => character?.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Character', {id: item?.id})
                }>
                <Image source={{uri: item.image}} style={styles.image} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 26,
  },
  title: {
    textAlign: 'center',
    marginVertical: 40,
  },
  image: {
    height: 200,
    width: 200,
  },
});

export default index;
