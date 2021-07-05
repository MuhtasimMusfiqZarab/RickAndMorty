import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
  return (
    <View style={styles.container}>
      <Text>Episode Detail</Text>
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
