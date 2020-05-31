import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

function SocialMedia({text, ...props}) {
  return (
    <View style={styles.container}>
      <Icon.Button {...props}>{text}</Icon.Button>
    </View>
  );
}

export default SocialMedia;
