import React from 'react';
import DefaultTheme from 'react-native-paper/lib/commonjs/styles/DefaultTheme';
import Provider from 'react-native-paper/lib/commonjs/core/Provider';
import {SafeAreaView, StyleSheet} from 'react-native';
import GeneralStatusBar from './src/components/statusBar';
import Routes from './Routes';
import {ServicesProvider} from './src/context/Services';
import {ShiftsProvider} from './src/context/Shifts';
import {ProfessionalProvider} from './src/context/Professional';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#141414',
    accent: 'yellow',
  },
};

const App = () => {
  return (
    <Provider theme={theme}>
      <GeneralStatusBar backgroundColor="#141414" barStyle="dark-content" />
      <SafeAreaView style={[styles.screen]}>
        <ServicesProvider>
          <ShiftsProvider>
            <ProfessionalProvider>
              <Routes />
            </ProfessionalProvider>
          </ShiftsProvider>
        </ServicesProvider>
      </SafeAreaView>
      <SafeAreaView opacity={0.2} style={styles.safeAreaDown} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  screen: {flex: 1},
  backgroundImage: {resizeMode: 'center', alignSelf: 'center'},
  safeAreaDown: {flex: 0, backgroundColor: '#141414'},
  appHeader: {backgroundColor: '#000'},
});

export default App;
