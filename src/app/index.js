import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Components
import Home from '@screens/Home/index.js';
import HomeList from '@screens/HomeList/index.js';
import HomeListMap from '@screens/HomeListMap/index.js';

const AppStack = createStackNavigator();

{/* <Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
</Stack.Navigator> */}


const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName={Home} screenOptions={{
        headerStyle: { backgroundColor: 'red' },
        headerTintColor: 'white'
      }}>
        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='HomeList' component={HomeList} options={
          {
            title: 'Que pasa pERROS',
            headerBackImage: () => <Image style={{ width: 10, height: 20 }} source={{
              uri: "https://m.media-amazon.com/images/M/MV5BY2JhMTJmYjYtNTVkYi00OWE3LWJlMjEtOWI4MTFkMjJhMmQ3XkEyXkFqcGdeQXVyNzY1NDgwNjQ@._V1_SX300.jpg",
            }} />
          }} />
      </AppStack.Navigator>
    </NavigationContainer >
  );
};

export default App;