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
    container: {
        borderRadius: 6,
        padding: 6,
        backgroundColor: BackgroundComponentLight,
    },
    containerDark: {
        backgroundColor: BackgroundComponentDark,
    },
    textDark: {
        color: ButtonTextLight
    },
    link: {
        color: ButtonBorderLight
    },
    linkDark: {
        color: ButtonBorderDark,
    },
});

export default style;