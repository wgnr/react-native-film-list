import { StyleSheet } from 'react-native'

// Custom colors
import {
  BackgroundLight,
  BackgroundDark,
} from '@constants/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BackgroundLight
  },
  containerDark: {
    backgroundColor: BackgroundDark
  },
});

export default style;