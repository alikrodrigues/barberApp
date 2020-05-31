import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {flex: 1},
  backgroundImage: {resizeMode: 'stretch'},
  container: {
    paddingVertical: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
  },
  buttonContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  socialMediaContainer: {flex: 1, marginTop: 30},
  button: {borderColor: '#fff'},
});

export default styles;
