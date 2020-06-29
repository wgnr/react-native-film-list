/* eslint-disable react-native/no-inline-styles */
import React from 'react';

// Import React's Components
import { SafeAreaView, Text } from 'react-native';

// Load our custom component
import FilmItem from '@components/FilmItem/index.js'

// Styles
import { appStyle as aS} from './styles.js';

// Films data
import { film01, film02, film03 } from '@assets/DB/films.js';


const Home = () => {
  return (
    <SafeAreaView style={aS.container}>
      <Text style={aS.text}>My Favorite Films 🎞</Text>
      <FilmItem film={film03} />
      <FilmItem film={film01} />
      <FilmItem film={film02} />
    </SafeAreaView>
  );
};

export default Home;