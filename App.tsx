import { View, Text, Button, TextInput } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home';
import LoginScreen from './components/Login';
import Header from './components/Header';

const Stack = createNativeStackNavigator();
function App() {
  function btnAction(){
    console.log("Button pressed");
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'peachpuff',
          },
          headerTintColor: 'maroon',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerLeft: ()=><Button title="Left" onPress={btnAction}/>,
            headerRight: ()=><Header/>,
            title: 'User Login',
            headerStyle: {
              backgroundColor: 'peachpuff',
            },
            headerTintColor: 'maroon',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
