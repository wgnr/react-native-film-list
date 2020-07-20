import React, { useContext } from 'react';

// Styles
import style from './styles';

// Components
import { View, Text, Linking } from 'react-native';

// Contexts
import ThemeContext from '@contexts/ThemeContext'


const SettingList = () => {
    // Theme control
    const { isLightTheme } = useContext(ThemeContext);

    return (
        <View style={[style.container, isLightTheme || style.containerDark]}>
            <Text style={isLightTheme || style.textDark}>All films' info are provided by <Text style={[style.link, isLightTheme || style.linkDark]} onPress={() => Linking.openURL('https://www.themoviedb.org/')}>TMDB</Text>.</Text>
        </View>
    );
};

export default SettingList;