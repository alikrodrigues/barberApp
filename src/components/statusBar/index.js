import React from 'react';
import {View, StatusBar} from 'react-native';
import styles from './styles';

const GeneralStatusBar = ({backgroundColor, ...props}) => (
  <View opacity={0.2} style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
export default GeneralStatusBar;
