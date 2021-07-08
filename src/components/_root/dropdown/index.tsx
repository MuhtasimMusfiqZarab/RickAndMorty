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
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#c7ccdb',
  },
});

export default index;
