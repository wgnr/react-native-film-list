import { StyleSheet } from 'react-native'

// Custom colors
import {
  ButtonTextLight,
  ButtonBorderLight,
  BackgroundLight,
  ButtonTextDark,
  ButtonBorderDark,
  BackgroundDark,
} from '@constants/colors';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: BackgroundLight
  },
  mainContainerDark: {
    backgroundColor: BackgroundDark
  },
  container: {
    flex: 0.7,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  settings:{
    flex:0.3,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 8,
    justifyContent: "flex-end",
    alignItems:"center",
    width: '100%',
  },
  button: {
    borderRadius: 12,
    paddingRight: 12,
    paddingLeft: 12,
    elevation: 3,
    backgroundColor: ButtonBorderLight,
  },
  buttonDark: {
    backgroundColor: ButtonBorderDark,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'normal',
    textAlign: 'center',
    color: ButtonTextLight,
    marginVertical: 8,
    alignSelf: "center"
  },
  buttonTextDark: {
    color: ButtonTextDark,
  }
});

export default style;