import React, { useContext } from 'react';

// Styles
import style from './style.js';

// Components
import { ScrollView, SafeAreaView, Text, View, Image, FlatList } from 'react-native';
import FilmDetailSnippet from '@components/FilmDetailSnippet';

// Contexts
import ThemeContext from '@contexts/ThemeContext'

// Utils
function reduceNumber(n) {
    let len = String(n).length;
    if (len > 9)
        return `$${parseInt(n / 1000000000)} B`;
    if (len > 6)
        return `$${parseInt(n / 1000000)} M`;
    return `$${parseInt(n / 1000)} k`
}

const FilmDetail = ({ route }) => {
    const { film } = route.params;  // Get information from previous screen. Route is the 
    const {
        backdrop_path: imgHeader,
        budget,
        genres: genresArr,
        id,
        original_language: originalLanguage,
        overview,
        poster_path: imgPoster,
        release_date,
        revenue,
        runtime,
        title,
        vote_average: voteAvg,
    } = film;

    // Refactoring data
    const genres = genresArr
        .sort((a, b) => a.name > b.name)
        .map(g => g.name).join(" - ");

    // FLatList props
    const filmDetails = [
        { title: 'Languaje', value: originalLanguage },
        { title: 'Release', value: release_date.slice(0, 4) },
        { title: 'Runtime', value: `${runtime} min` },
        { title: 'Vote', value: voteAvg },
        { title: 'Budget', value: reduceNumber(budget) },
        { title: 'Revenue', value: reduceNumber(revenue) },
    ];
    const renderItem = ({ item }) => <FilmDetailSnippet filmData={item} />
    const keyExtractor = ({ id }) => `${Math.random()}${id}`;

    // Contexts
    const { isLightTheme } = useContext(ThemeContext);

    return (
        <SafeAreaView style={[style.container, isLightTheme || style.containerDark]}>

            <ScrollView
                centerContent={true}
                contentContainerStyle={style.scrollViewContainer}
                showsVerticalScrollIndicator={false}
                bounces={true}>
                <Image source={{ uri: imgPoster }} style={style.poster} />

                <View style={style.infoContainer}>
                    <Text style={[style.title, isLightTheme || style.titleDark]}>{title}</Text>

                    <View>
                        <Text style={[style.subtitles, isLightTheme || style.subtitlesDark]}>Genres</Text>
                        <Text style={[style.subtitlesContent, isLightTheme || style.subtitlesContentDark]}>{genres}</Text>
                        <Text style={[style.subtitles, isLightTheme || style.subtitlesDark]}>Overview</Text>
                        <Text style={[style.subtitlesContent, style.overview, isLightTheme || style.subtitlesContentDark]}>{overview}</Text>

                        <View style={style.groupedInfoContainer}>
                            <ScrollView horizontal={true}>
                                <FlatList //ASK VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.
                                    data={filmDetails}
                                    renderItem={renderItem}
                                    keyExtractor={keyExtractor}
                                    numColumns={3}
                                    columnWrapperStyle={style.flatListRow} // Me confunde que algo se llame column y tenga sus efectos por row
                                />
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FilmDetail;