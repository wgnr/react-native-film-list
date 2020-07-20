import React from 'react';

// Styles
import style from './styles.js';

// Components
import { SafeAreaView } from 'react-native';
import FilmItem from '@components/FilmItem';

// Moocked data
// import filmList from '@services/DB/index';


const HomeListMap = () => {
    return (
        <SafeAreaView style={style.container}>
            {filmList.map(eachFilm => <FilmItem film={eachFilm} />)}
        </SafeAreaView>
    );
};

export default HomeListMap;