import React from 'react';
import {CardDetail} from '../../components/_root';

interface Props {
  navigation: any;
  route: any;
}
function index({navigation, route}: Props) {
  const id = route?.params?.id;
  const item = route?.params?.item;
  return <CardDetail route={route?.name} item={item} />;
}

export default index;
