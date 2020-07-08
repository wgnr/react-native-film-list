// Define custom styles
import { StyleSheet } from 'react-native'

// Custom colors
import { ming, pacificBlue, middleBlue, isabelline, orangePeel, lightOrange } from '@constants/colors';

const style = StyleSheet.create({
  touchedMainContainer: {
    backgroundColor: lightOrange
  },
  mainContainer: {
    padding: 4,
    margin: 4,
    justifyContent: "center",
    backgroundColor: isabelline,
    borderRadius: 6
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
    color: ming
  },
  subTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: pacificBlue
  },
  description: {
    fontSize: 13,
    marginTop: 2,
    color: pacificBlue,
    textAlign: 'justify'
  },
  moreInfo: {
    fontSize: 12,
    color: middleBlue,
    fontWeight: "bold",
    marginTop: 2
  },
  awards: {
    fontSize: 11,
    fontStyle: "italic",
    color: orangePeel,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 3
  }
});

export default style;