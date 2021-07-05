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
          showsVerticalScrollIndicator={false}
          keyExtractor={episode => episode?.id}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Episode', {id: item?.id})
                  }>
                  <Text style={styles.headerTitle}>{item?.name}</Text>
                  <Text style={styles.subTitle}>
                    Aired on: {item?.air_date}
                  </Text>
                </TouchableOpacity>
              </View>
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
    marginHorizontal: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  card: {
    borderWidth: 1,
    borderColor: '#c7ccdb',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },

  headerTitle: {
    fontSize: 18,
    color: '#2a324b',
    paddingBottom: 10,
  },
  subTitle: {
    fontSize: 15,
    color: '#4f546c',
  },
});

export default index;
