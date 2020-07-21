import { StyleSheet } from 'react-native'

// Custom colors
import {
    TextMainLight,
    TextSecondaryLight,
    BackgroundLight,
    TextMainDark,
    TextSecondaryDark,
    BackgroundDark,
} from '@constants/colors';

const MAIN_CONTAINER_MARGIN = 6;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingTop: MAIN_CONTAINER_MARGIN,
        paddingLeft: MAIN_CONTAINER_MARGIN,
        paddingRight: MAIN_CONTAINER_MARGIN,
        backgroundColor: BackgroundLight,
    },
    containerDark: {
        backgroundColor: BackgroundDark,
    },
    scrollViewContainer: {
        alignItems: "center"
    },
    poster: {
        aspectRatio: 0.66,
        borderRadius: 6,
        width: '66%',
    },
    infoContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-start"
    },
    title: {
        marginTop: MAIN_CONTAINER_MARGIN * 2,
        marginBottom: MAIN_CONTAINER_MARGIN,
        fontSize: 18,
        fontWeight: "bold",
        color: TextMainLight
    },
    titleDark: {
        color: TextMainDark
    },
    subtitles: {
        marginTop: MAIN_CONTAINER_MARGIN * 2,
        fontSize: 16,
        fontWeight: "bold",
        color: TextSecondaryLight
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
    overview: {
        textAlign: "justify"
    },
    groupedInfoContainer: {
        marginTop: MAIN_CONTAINER_MARGIN * 2,
        marginBottom: MAIN_CONTAINER_MARGIN * 2,
        alignItems: "center", // Shrinks each 'row'
    },
    flatListRow: {
        justifyContent: "center",
        marginBottom: 4,
    },

});

export default style;