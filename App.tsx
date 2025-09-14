import { View, Text } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Login' component={Login}/>
        <Tab.Screen name='SignUp' component={SignUp}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Login(){
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>It's Login Screen</Text>
    </View>
  );
}
function SignUp(){
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>It's SignUp Screen</Text>
    </View>
  );
}

export default App;
