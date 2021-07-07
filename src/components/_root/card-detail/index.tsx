import React, {ReactNode} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

interface Props {
  item: any;
  route: string;
}

function episodeDetail(item: any) {
  return (
    <View style={styles.containerMiddle}>
      <Text style={styles.text}>{item.name} </Text>
      <Text>Aired on: {item?.air_date} </Text>
      <Text>Episode: {item?.episode} </Text>
      <Text>Total Characters: {item?.characters?.length} </Text>
    </View>
  );
}
function characterDetail(item: any) {
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width;
  return (
    <View style={styles.container}>
      {item?.image && (
        <Image
          source={{uri: `${item?.image}`}}
          style={{height: imageHeight, width: imageWidth - 32}}
        />
      )}

      <Text style={styles.text}>{item?.name} </Text>
      <View style={{justifyContent: 'center'}}>
        <Text>Status: {item?.status} </Text>
        <Text>Species: {item?.species} </Text>
        <Text>Type: {item?.type} </Text>
        <Text>Gender: {item?.gender} </Text>
        <Text>Origin: {item?.origin?.name} </Text>
        <Text>Location: {item?.location?.name} </Text>
      </View>
    </View>
  );
}
function locationDetail(item: any) {
  return (
    <View style={styles.containerMiddle}>
      <Text style={styles.text}>{item.name} </Text>
      <Text>Type: {item.type} </Text>
      <Text>Dimension: {item.dimension} </Text>
      <Text>Residents Total: {item.residents.length} </Text>
    </View>
  );
}

function index({route, item}: Props) {
  return (
    <>
      {route === 'Episode' && episodeDetail(item)}
      {route === 'Character' && characterDetail(item)}
      {route === 'Location' && locationDetail(item)}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 16,
    borderWidth: 1,
    borderColor: '#c7ccdb',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  containerMiddle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    borderWidth: 1,
    borderColor: '#c7ccdb',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    margin: 5,
  },
  image: {
    height: 100,
    width: 1,
    marginRight: 10,
  },
});

export default index;
