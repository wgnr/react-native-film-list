import React, { useContext } from 'react';

// Styles
import style from './styles';

// Components
import { View, Text, TouchableOpacity, Switch } from 'react-native';

// Contexts
import ThemeContext from '@contexts/ThemeContext'

// Constants
import {
    BackgroundComponentLight,
    ButtonBorderDark,
    grey,
} from '@constants/colors';

const SettingList = () => {
    // Theme control
    const { toggleTheme, isLightTheme } = useContext(ThemeContext);

    return (
        <View style={[style.optList, isLightTheme || style.optListDark]}>

            <Text style={[style.optText, isLightTheme || style.optTextDark]}>Settings</Text>
            <TouchableOpacity onPress={toggleTheme}>
            
                <View style={style.flexHorizontal}>

                    <Text style={[isLightTheme || style.optTextListDark]}>Dark Mode</Text>
                    <Switch
                        trackColor={{ false: grey, true: ButtonBorderDark }}
                        thumbColor={BackgroundComponentLight}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleTheme}
                        value={!isLightTheme}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default SettingList;