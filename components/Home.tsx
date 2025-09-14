import {View, Text} from 'react-native';
import React, {} from 'react';

function HomeScreen(props) {
  console.log(props.route.params);
  const {name , age} = props.route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>It's Home Screen</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
}

export default HomeScreen;