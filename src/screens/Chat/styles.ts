import {StyleSheet} from 'react-native';
import {top, colors, sizes} from '@constants';

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black_087,
  },
  container: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    color: colors.white_FFFFFF,
    fontSize: 16,
    padding: 8,
    borderTopColor: colors.white_FFFFFF,
    borderTopWidth: 1,
    borderRightColor: colors.white_FFFFFF,
    borderRightWidth: 1,
  },
  createNewUserView: {
    height: 50,
    flexDirection: 'row',
  },
  name: {
    color: colors.white_FFFFFF,
    fontSize: 16,
  },
  btnStyle: {
    borderTopWidth: 1,
    borderTopColor: colors.white_FFFFFF,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
