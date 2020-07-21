// Define custom styles
import { StyleSheet } from 'react-native'

// Custom colors
import {
  TextMainLight,
  TextSecondaryLight,
  BackgroundComponentLight,
  TextMainDark,
  TextSecondaryDark,
  BackgroundComponentDark,
} from '@constants/colors';

const style = StyleSheet.create({
  mainContainer: {
    padding: 4,
    margin: 2,
    marginRight: 4,
    marginLeft: 4,
    borderRadius: 6,
    justifyContent: "center",
    backgroundColor: BackgroundComponentLight,
  },
  mainContainerDark: {
    backgroundColor: BackgroundComponentDark,
  },
  flexHorizontal: {
    flexDirection: "row",
  },
  poster: {
    flex: 0.32,
    aspectRatio: 0.66,
    alignSelf: "center",
    borderRadius: 6
  },
  textContainer: {
    flex: 1,
    marginLeft: 6
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: TextMainLight
  },
  titleDark: {
    color: TextMainDark
  },
  subTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: TextSecondaryLight
  },
  subTitleDark: {
    color: TextSecondaryDark
  },
  description: {
    fontSize: 13,
    marginTop: 2,
    color: TextSecondaryLight,
    textAlign: 'justify'
  },
  descriptionDark: {
    color: TextSecondaryDark,
  },
});

export default style;