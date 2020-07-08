import React, { useState } from 'react';

// Styles
import style from './styles.js';

// Components
import { Text, View, Image, TouchableOpacity } from 'react-native';


const FilmItem = ({ film }) => {
    const { // The film API that I'm use have capital letter for first letter, that's why i decided to rename all properties.
        Poster: poster, Title: title,
        Year: year, Genre: genre,
        Runtime: runtime, Plot: plot } = film;

    const [touched, setTouched] = useState(false);

    const handlePress = () => {
        setTouched(!touched);
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[style.mainContainer, touched && style.touchedMainContainer]}>
                <View style={style.flexHorizontal}>
                    <Image source={{ uri: poster }} style={style.poster} />
                    <View style={style.textContainer}>
                        <Text style={style.title} numberOfLines={2} ellipsizeMode='tail'>{title} ({year})</Text>
                        <Text style={style.subTitle} numberOfLines={1} ellipsizeMode='tail'>{runtime} - {genre}</Text>
                        <Text style={style.description} numberOfLines={4} ellipsizeMode='tail'>{plot}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default FilmItem;