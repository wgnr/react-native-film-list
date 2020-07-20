import React, { useContext } from 'react';

// Styles
import style from './styles.js';

// Components
import { SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import FilmItem from '@components/FilmItem';

// Contexts
import ThemeContext from '@contexts/ThemeContext'
import FilmContext from '@contexts/FilmContext'

// Constants
import { ButtonBorderLight, ButtonBorderDark } from '@constants/colors';


const HomeList = () => {
    // Contexts
    const { isLightTheme } = useContext(ThemeContext);
    const { films } = useContext(FilmContext);

    const keyExtractor = ({ id }) => `${Math.random()}${id}`;
    const renderItem = ({ item }) => <FilmItem film={item} />

    return (
        <SafeAreaView style={[style.container, isLightTheme || style.containerDark]}>
            {films.length === 0
                ? // If films isn't available yet, show an activity indicator 
                (<ActivityIndicator size='large'
                    color={isLightTheme ? ButtonBorderLight : ButtonBorderDark} />)
                :
                (<FlatList
                    data={films}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />)}
        </SafeAreaView>
    );
};

export default HomeList;