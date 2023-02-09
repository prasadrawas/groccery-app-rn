import { StyleSheet } from 'react-native';
import { GREEN_COLOR, RED_COLOR, YELLOW_COLOR } from '../constants/Colors';

const Styles = StyleSheet.create({
  Black: {
    fontFamily: 'Poppins-Black',
  },
  Bold: {
    fontFamily: 'Poppins-Bold',
  },
  SemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  ExtraBold: {
    fontFamily: 'Poppins-ExtraBold',
  },
  Medium: {
    fontFamily: 'Poppins-Medium',
  },
  Light: {
    fontFamily: 'Poppins-Light',
  },
  ExtraLight: {
    fontFamily: 'Poppins-ExtraLight',
  },
  Thin: {
    fontFamily: 'Poppins-Thin',
  },
  Regular: {
    fontFamily: 'Poppins-Regular',
  },
  ColorGreen: {
    color: `${GREEN_COLOR}`,
  },
  BgGreen: {
    backgroundColor: `${GREEN_COLOR}`,
  },
  ColorYellow: {
    color: `${YELLOW_COLOR}`,
  },
  BgYellow: {
    backgroundColor: `${YELLOW_COLOR}`,
  },
  ColorRed: {
    color: `${RED_COLOR}`,
  },
  BgRed: {
    backgroundColor: `${RED_COLOR}`,
  },
  Card: {
    backgroundColor: '#fff',
    elevation: 2,
  },
});

export default Styles;
