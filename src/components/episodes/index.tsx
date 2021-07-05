import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';

import {useEpisodes} from '../../_context/episodes';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const {episodes} = useEpisodes();

  console.log('This are all the episodes', episodes);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Here all the episodes</Text>
        <Button
          title="View Episode"
          onPress={() => navigation.navigate('Episode', {id: 100})}
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
