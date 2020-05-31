import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Appbar} from 'react-native-paper';

export default ({children, title, subtitle, style, hiddenHeader}) => (
  <ImageBackground
    style={[styles.screen, style]}
    imageStyle={styles.backgroundImage}
    source={require('../../assets/logo/invictus.png')}>
    {hiddenHeader ? null : (
      <Appbar.Header style={styles.appHeader}>
        <Appbar.Content title={title} subtitle={subtitle} />
      </Appbar.Header>
    )}
    <View style={{backgroundColor: 'rgba(0, 0, 0, 0.4)', flex: 1}}>
      {children}
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  screen: {flex: 1},
  backgroundImage: {resizeMode: 'center', alignSelf: 'center'},
  appHeader: {backgroundColor: '#000'},
});
