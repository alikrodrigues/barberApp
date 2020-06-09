import React from 'react';
import {ImageBackground, View, Platform, Linking} from 'react-native';
import Invictus from '../../assets/logo/invictus-negative.svg';
import SocialMedia from '../../components/socialMedia';
import {Button} from 'react-native-paper';
import styles from './styles';
import {Actions} from 'react-native-router-flux';

function MainPage() {
  return (
    <ImageBackground
      style={[styles.screen]}
      imageStyle={styles.backgroundImage}
      source={require('../../assets/images/barbearia-cadeira.jpg')}>
      <View style={styles.container}>
        <Invictus height={210} width={200} />
        <View style={styles.buttonContainer}>
          <Button
            color={'#fff'}
            mode="outlined"
            style={styles.button}
            onPress={() => Actions.menuPage()}>
            Agendar Serviço
          </Button>
        </View>
        <View style={styles.socialMediaContainer}>
          <SocialMedia
            name={'map'}
            backgroundColor={'transparent'}
            text={'Endereço'}
            onPress={() => {
              const scheme = Platform.select({
                ios: 'maps:0,0?q=',
                android: 'geo:0,0?q=',
              });
              const latLng = '-27.5845381,-48.5796074';
              const label = 'Invictus Barbearia';
              const url = Platform.select({
                ios: `${scheme}${label}@${latLng}`,
                android: `${scheme}${latLng}(${label})`,
              });

              Linking.openURL(url);
            }}
          />
          <SocialMedia
            name={'facebook'}
            backgroundColor={'transparent'}
            text={'Curta nossa pagina'}
          />
          <SocialMedia
            name={'instagram'}
            backgroundColor={'transparent'}
            text={'Siga no Instagram'}
            onPress={() => {
              Linking.openURL('instagram://user?username=invicthusbarbearia');
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default MainPage;
