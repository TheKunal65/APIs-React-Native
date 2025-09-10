import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';

function App() {
  const [show , setShow] = useState(false);
  function displayLoader(){
    setShow(true);
    setTimeout(()=>{
      setShow(false);
    }, 3000);
  }
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Activity Indicator</Text>
      <ActivityIndicator size={100} color="gold" animating={show}/>
      {
        show ? <ActivityIndicator size="large" color="red"/> : null
      }
      <Button title="Click" onPress={(displayLoader)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 50,
    backgroundColor: 'lightblue',
    borderRadius: 30,
    margin: 25,
    padding: 3,
    color: 'yellow',
    borderWidth: 5,
    borderColor: 'purple',
    fontWeight: 'bold',
  },
});

export default App;
