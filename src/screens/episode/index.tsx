import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const ids = route.params.id;

  return (
    <View style={styles.container}>
      <Text>Episode Detail {ids} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default index;
