import {View, Text, Button} from 'react-native';
import React, {} from 'react';

function LoginScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>It's Login Screen</Text>
      <Button
        title="Goto Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}

export default LoginScreen;