import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet, View} from 'react-native';

interface Props {
  items: any;
  setItems: any;
  value: any;
  setValue: any;
}

function index({items, setItems, value, setValue}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.wrapper}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#c7ccdb',
  },
  wrapper: {
    margin: 5,
    zIndex: 10,
  },
});

export default index;
