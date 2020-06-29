/* eslint-disable react-native/no-inline-styles */
import React from 'react';

// Components
import { SafeAreaView, Text, View, Image } from 'react-native';


// Styles
import { appStyle as aS, filmStyle as fS } from '@app/style.js';

// Film data
import { film01 } from '@assets/DB/films.js';

const App = () => {
  return (
    <SafeAreaView style={aS.container}>
      <Text style={aS.text}>My Favorite Films</Text>
      <View style={fS.mainContainer}>
        <View style={fS.flexHorizontal}>
          <Image source={{ uri: film01.Poster }} style={fS.poster} />
          <View style={fS.textContainer}>
            <Text style={fS.title}>{film01.Title} ({film01.Year})</Text>
            <Text style={fS.subTitle}>{film01.Runtime} - {film01.Rated} - {film01.Genre}</Text>
            <Text style={fS.description} numberOfLines={6} ellipsizeMode='tail'>{film01.Plot}</Text>
          </View>
        </View>
        <Text style={fS.moreInfo}>Actors: {film01.Actors}</Text>
        <Text style={fS.moreInfo}>Director: {film01.Director}</Text>
        <Text style={fS.awards}>{film01.Awards}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
