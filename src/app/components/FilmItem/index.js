/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

// Components
import { Text, View, Image, TouchableOpacity } from 'react-native';

// Styles
import { filmStyle as fS, touchedStyle as tS } from './styles.js';

const FilmItem = ({ film }) => {
    const [touched, setTouched] = useState(false);

    const handlePress = () => {
        setTouched(!touched);
    };
//
    // Used in numberOfLines. If is touched show entire text.
    const infLinesLogic = (touched, _default) => touched ? 0 : _default;

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[fS.mainContainer, touched && tS.backgroundColor]}>
                <View style={fS.flexHorizontal}>
                    <Image source={{ uri: film.Poster }} style={fS.poster} />
                    <View style={fS.textContainer}>
                        <Text style={fS.title} numberOfLines={infLinesLogic(touched, 2)} ellipsizeMode='tail'>{film.Title} ({film.Year})</Text>
                        <Text style={fS.subTitle} numberOfLines={infLinesLogic(touched, 1)} ellipsizeMode='tail'>{film.Genre}</Text>
                        <Text style={fS.subTitle} numberOfLines={infLinesLogic(touched, 1)} ellipsizeMode='tail'>{film.Runtime} - {film.Rated}</Text>
                        <Text style={fS.description} numberOfLines={infLinesLogic(touched, 5)} ellipsizeMode='tail'>{film.Plot}</Text>
                    </View>
                </View>
                <Text style={fS.moreInfo} numberOfLines={infLinesLogic(touched, 1)} ellipsizeMode='tail'>Actors: {film.Actors}</Text>
                <Text style={fS.moreInfo} numberOfLines={infLinesLogic(touched, 1)} ellipsizeMode='tail'>Director: {film.Director}</Text>
                <Text style={fS.awards} numberOfLines={infLinesLogic(touched, 1)} ellipsizeMode='tail'>{film.Awards}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default FilmItem;
