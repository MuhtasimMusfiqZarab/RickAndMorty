import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HomeProps {}
function index({}: HomeProps) {
  return (
    <View>
      <Text>This is the home</Text>
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
