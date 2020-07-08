import React from 'react';

// Styles
import style from './styles.js';

// Components
import { SafeAreaView, FlatList, View } from 'react-native';
import FilmItem from '@components/FilmItem';

// Data
import filmList from '@services/DB/index';


const HomeList = () => {
    const keyExtractor = ({ imdbID }) => `IMDB ID:${imdbID}`;
    const renderItem = ({ item }) => <FilmItem film={item} />
    const separator = () => <View style={style.separator} />

    return (
        <SafeAreaView style={style.container}>
            <FlatList
                data={filmList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={separator}
            />
        </SafeAreaView>
    );
};

export default HomeList;