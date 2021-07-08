import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {SearchIcon} from '../../../_icons';

interface Props {
  term: any;
  onTermChange?: any;
  onTermSubmit?: any;
}

const index = ({term, onTermChange, onTermSubmit}: Props) => {
  return (
    <View style={styles.backgroundStyle}>
      <SvgXml xml={SearchIcon} style={styles.iconStyle} />

      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    marginBottom: 5,
    backgroundColor: '#F0EEEE',
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#c7ccdb',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default index;
