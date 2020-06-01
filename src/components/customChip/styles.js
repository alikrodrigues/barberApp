import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textStyleChips: hasInSelecteds => ({
    color: hasInSelecteds ? '#000' : '#fff',
  }),
  styleChips: hasInSelecteds => ({
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: hasInSelecteds ? '#ebebeb' : 'rgba(0, 0, 0, 0.4)',
  }),
});

export default styles;
