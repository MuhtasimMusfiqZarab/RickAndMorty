import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Button,
} from 'react-native';

interface Props {
  navigation: any;
  route: any;
}

function index({navigation, route}: Props) {
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
