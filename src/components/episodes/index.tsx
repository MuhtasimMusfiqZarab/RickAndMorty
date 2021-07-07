import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {useEpisodes} from '../../_context/episodes';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const {episodes} = useEpisodes();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={episodes}
          keyExtractor={episode => episode?.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Episode', {id: item?.id})}>
                <Text>{item?.name}</Text>
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
    marginVertical: 8,
  },
});

export default index;
