import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flexDirection: 'row', paddingTop: 10, flexShrink: 1},
  chipAddMore: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  textStyleChips: (rowTitle, serviceTitle) => ({
    color: rowTitle === serviceTitle ? 'yellow' : '#fff',
  }),
});

export default styles;
