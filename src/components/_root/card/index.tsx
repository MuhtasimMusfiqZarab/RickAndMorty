import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  subTitle: string;
  image?: string;
  item?: any;
  navigation?: any;
  navigationRoute?: string;
}

function index({
  title,
  subTitle,
  image,
  item,
  navigation,
  navigationRoute,
}: Props) {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate(navigationRoute, {id: item?.id})}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
