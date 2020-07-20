import { StyleSheet } from 'react-native'

// Custom colors
import {
  ButtonTextLight,
  ButtonBorderLight,
  BackgroundComponentLight,
  ButtonBorderDark,
  BackgroundComponentDark,
} from '@constants/colors';

const style = StyleSheet.create({
  optList: {
    width: '100%',
    borderRadius: 6,
    padding: 6,
    backgroundColor: BackgroundComponentLight,
  },
  optListDark: {
    backgroundColor: BackgroundComponentDark,
  },
  flexHorizontal: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },
  optText: {
    fontWeight: "bold",
    marginBottom: 2,
    color: ButtonBorderLight
  },
  optTextDark: {
    color: ButtonBorderDark,
  },
  optTextListDark: {
    color: ButtonTextLight
  }
});

export default style;