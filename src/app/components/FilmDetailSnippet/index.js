import React, {useContext} from 'react';

// Components
import { Text, View } from 'react-native';

// Context
import ThemeContext from '@contexts/ThemeContext'

// Styles
import style from './style';

const FilmDetailSnippet = ({ filmData }) => {
    const { title, value } = filmData;

    //Context
    const {isLightTheme} = useContext(ThemeContext);

    return (
        <View style={style.container}>

            <Text style={[style.subtitles, isLightTheme || style.subtitlesDark]}>{title}</Text>
            <Text style={[style.subtitlesContent, isLightTheme || style.subtitlesContentDark]}>{value}</Text>
        </View>
    );
};

export default FilmDetailSnippet;