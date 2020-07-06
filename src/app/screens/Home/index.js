import React from 'react';

// Styles
import style from './styles.js';

// Components
import { SafeAreaView, Text } from 'react-native';
import FilmItem from '@components/FilmItem/index.js'

// Films data
import filmList from '@services/DB/index';


const Home = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text}>My Favorite Films 🎞</Text>
      <FilmItem film={filmList[0]} />
      <FilmItem film={filmList[1]} />
    </SafeAreaView>
  );
};

export default Home;