import { StyleSheet } from 'react-native'

// Custom colors
import { ming } from '@constants/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 2
  }
});

export default style;