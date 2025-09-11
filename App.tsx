import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Pressable,
} from 'react-native';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <View style={styles.main}>
      <Pressable 
      onPress={() => console.log('OnPress')}
      // long press ka delay default 500ms hota hai
      onLongPress={()=> console.log('OnLongPress')}
      onPressIn={()=> console.log('OnPressIn')}
      onPressOut={()=>console.log('OnPressOut')}
      >
        <Text style={styles.text}>Pressable</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    borderWidth: 3,
    margin: 95,
    borderRadius: 30,
    backgroundColor: '#889defff',
    color: 'white',
    shadowColor: 'black',
    elevation: 10,
  },
});

export default App;
