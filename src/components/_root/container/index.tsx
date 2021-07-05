import React, {ReactChild} from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  children: ReactChild;
}

function index({children}: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});

export default index;
