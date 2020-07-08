import { StyleSheet } from 'react-native'

// Custom colors
import { ming } from '@constants/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexShrink: 1
    // alignContent: "stretch",
    // alignItems: "center"
  },
  button:{
    borderWidth: 2,
    padding: 4,
    
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 4,
    textShadowColor: ming,
    marginVertical: 8,
    borderColor: ming,
    alignSelf: "center"
  }
});

export default style;