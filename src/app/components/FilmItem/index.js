import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

// Styles
import style from './styles';

// Components
import { Text, View, Image, TouchableOpacity } from 'react-native';

// Contexts
import ThemeContext from '@contexts/ThemeContext'

const FilmItem = ({ film }) => {
    const { // The film API that I'm use have capital letter for first letter, that's why i decided to rename all properties.
        poster_path: poster, title: title,
        release_date: year,
        runtime: runtime, overview: plot } = film;
    const yearOnly = year.slice(0, 4);

    // Navigation
    const navigation = useNavigation();
    const handleNavigateToDetail = () => navigation.navigate('FilmDetail', { film });

    // Contexts
    const { isLightTheme } = useContext(ThemeContext);

    return (
        <TouchableOpacity onPress={handleNavigateToDetail}>

            <View style={[style.mainContainer, isLightTheme || style.mainContainerDark]}>

                <View style={style.flexHorizontal}>

                    <Image source={{ uri: poster }} style={style.poster} />
                    <View style={style.textContainer}>

                        <Text style={[style.title, isLightTheme || style.titleDark]}
                            numberOfLines={2} ellipsizeMode='tail'>{title} ({yearOnly})</Text>
                        <Text style={[style.subTitle, isLightTheme || style.subTitleDark]}
                            numberOfLines={1} ellipsizeMode='tail'>{runtime} min</Text>
                        <Text style={[style.description, isLightTheme || style.descriptionDark]}
                            numberOfLines={4} ellipsizeMode='tail'>{plot}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default FilmItem;