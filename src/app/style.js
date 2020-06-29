// Define custom styles
import { StyleSheet } from 'react-native'

// Custom colors
import { ming, pacificBlue, middleBlue, isabelline, orangePeel } from '@constants/colors';


export const appStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowOffset:{
      width: 0,
      height: 0
    },
    textShadowRadius: 4,
    textShadowColor: ming,
    marginBottom: 6
  }
});

export const filmStyle = StyleSheet.create({
  mainContainer: {
    padding: 4,
    justifyContent: "center",
    backgroundColor: isabelline
  },
  flexHorizontal: {
    flexDirection: "row",
    alignItems: "flex-start"
  },
  poster: {
    flex: 0.42,
    aspectRatio: 0.66,
    alignSelf: "center"
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
    color: pacificBlue,
    textAlign: 'justify'
  },
  moreInfo: {
    fontSize: 12,
    color: middleBlue,
    fontWeight: "bold"
  },
  awards: {
    fontSize: 11,
    fontStyle: "italic",
    color: orangePeel,
    fontWeight: "bold",
    textAlign: "center"
  }
});