import React from 'react';

// Styles
import style from './styles.js';

// Components
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import FilmItem from '@components/FilmItem/index.js'

// Films data
import filmList from '@services/DB/index';


const Home = ({ navigation }) => {
  const handleNavigateToList = () => navigation.navigate('HomeList');
  return (
    <SafeAreaView style={style.container}>
      <TouchableOpacity style={style.button} onPress={handleNavigateToList}>
        <Text style={style.text}>ESTO ES UN BOTON!</Text>
      </TouchableOpacity>
      <FilmItem film={filmList[0]} />
      {/* <FilmItem film={filmList[1]} /> */}

    </SafeAreaView>
  );
};

export default Home;