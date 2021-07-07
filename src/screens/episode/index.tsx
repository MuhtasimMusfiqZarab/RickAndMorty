import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  const id = route?.params?.id;
  const item = route?.params?.item;

  console.log('Route', route);

  return (
    <View style={styles.container}>
      <Text>Episode Detail {id} </Text>
      <Text>Episode Detail {item?.id} </Text>
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
