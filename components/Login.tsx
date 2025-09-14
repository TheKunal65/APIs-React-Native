import { View, Text, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

function LoginScreen(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>It's Login Screen</Text>
      <TextInput
        style={{ fontSize: 20, borderWidth: 2 }}
        placeholder="Enter name: "
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={{ fontSize: 20, borderWidth: 2 }}
        placeholder="Enter age: "
        onChangeText={(age) => setAge(age)}
      />
      <Button
        title="Goto Home"
        onPress={() => props.navigation.navigate('Home', { name, age })}
      />
    </View>
  );
}

export default LoginScreen;
