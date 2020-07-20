import { StyleSheet } from 'react-native';

// Custom colors
import {
    TextSecondaryLight,
    TextSecondaryDark,
} from '@constants/colors';

const style = StyleSheet.create({
    container: {
        marginLeft: 12,
        marginRight: 12,
        alignItems: "center",
    },
    subtitles: {
        fontSize: 16,
        fontWeight: "bold",
        color: TextSecondaryLight,
    },
    subtitlesDark: {
        color: TextSecondaryDark
    },
    subtitlesContent: {
        fontSize: 15,
        fontWeight: "normal",
        color: TextSecondaryLight,
    },
    subtitlesContentDark: {
        color: TextSecondaryDark
    },
});

export default style;