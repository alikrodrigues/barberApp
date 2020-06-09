import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerRow: {
    borderBottomWidth: 0.8,
    borderBottomColor: '#000',
    paddingLeft: 15,
    minHeight: '10%',
    flexDirection: 'row',
    paddingTop: 2,
    paddingBottom: 2,
  },

  title: {color: '#fff', flex: 1, fontSize: 18},

  price: {
    textAlign: 'right',
    color: '#fff',
    flex: 1,
    alignSelf: 'center',
    fontSize: 18,
  },

  flatContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 8,
    flex: 1,
  },

  labelTitle: {textAlign: 'center', color: '#fff'},
});

export default styles;
