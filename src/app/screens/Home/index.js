import React, { useContext } from 'react';

// Styles
import style from './styles.js';

// Components
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import SettingList from '@components/SettingsList/index';
import Credits from '@components/Credits/index';

// Contexts
import ThemeContext from '@contexts/ThemeContext'


const Home = ({ navigation }) => {
  // Navigation
  const handleNavigateToList = () => navigation.navigate('HomeList');

  // Context
  const { isLightTheme } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[style.mainContainer, isLightTheme || style.mainContainerDark]}>

      <View style={style.container}>
        <Credits />
        <TouchableOpacity onPress={handleNavigateToList}
          style={[style.button, isLightTheme || style.buttonDark]}>
          <Text style={[style.buttonText, isLightTheme || style.buttonTextDark]}>Discover Films</Text>
        </TouchableOpacity>
      </View>

      <View style={style.settings}>
        <SettingList />
      </View>

    </SafeAreaView>
  );
};

export default Home;