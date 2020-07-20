import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

//Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import FilmDetail from '@screens/FilmDetail/index';
import Home from '@screens/Home/index';
import HomeList from '@screens/HomeList/index';

// Components
import { StatusBar } from 'react-native';

// Contexts
import ThemeContext, { themes } from '@contexts/ThemeContext';
import FilmContext from '@contexts/FilmContext';

// Services
import { getDiscoverFilm } from '@services/filmService';

// Constants 
import {
  defaultNavOptions,
  filmDetailScreen,
  homeListScreen,
  homeScreen,
  statusBarOptions,
} from '@constants/appNavigationProps';

const AppStack = createStackNavigator();  // Navigation thread 'AppStack'

const App = () => {
  // Theme
  const [theme, setTheme] = useState(themes.light);
  const isLightTheme = theme === themes.light;
  const toggleTheme = () => setTheme(isLightTheme ? themes.dark : themes.light);

  // Retrive films from
  const [films, setFilms] = useState([]);
  useEffect(() => {
    (async () => setFilms(await getDiscoverFilm()))();
  }, []);


  return (
    <FilmContext.Provider
      value={{ films }}>

      <ThemeContext.Provider
        value={{ toggleTheme, isLightTheme }}>
        <StatusBar barStyle={statusBarOptions.barStyle}
          translucent={true}
          backgroundColor={statusBarOptions.backgroundColor(isLightTheme)}
        />

        <NavigationContainer>
          <AppStack.Navigator // Init the navigation thread
            initialRouteName={'Home'}
            screenOptions={defaultNavOptions(isLightTheme)}>

            <AppStack.Screen
              name={'Home'} component={Home}
              options={homeScreen.options} />
            <AppStack.Screen
              name='HomeList' component={HomeList}
              options={homeListScreen.options} />
            <AppStack.Screen
              name='FilmDetail' component={FilmDetail}
              initialParams={filmDetailScreen.initialParams}
              options={filmDetailScreen.options} />

          </AppStack.Navigator>
        </NavigationContainer>

      </ThemeContext.Provider>

    </FilmContext.Provider>
  );
};

export default App;