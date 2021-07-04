import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}
function index({}: Props) {
  return (
    <View style={styles.container}>
      <Text>All the characters</Text>
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
