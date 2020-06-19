import {StyleSheet, Dimensions} from 'react-native';
import {top, colors, sizes} from '@constants';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.black_087,
  },
  name: {
    fontSize: 18,
    color: colors.red_E50003,
  },
  textInput: {
    marginVertical: 8,
    padding: 8,
    width: sizes.width * 0.75,
    color: colors.white_FFFFFF,
    fontSize: 16,
    borderColor: colors.red_E50003,
    borderWidth: 1,
  },
  btnStyle: {
    padding: 8,
  },
});
