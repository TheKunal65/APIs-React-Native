import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <View>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
        Platform= {Platform.OS}
      </Text>
      {Platform.OS == 'android' ? (
        <View
          style={{ height: 100, width: 100, backgroundColor: 'lightgreen' }}
        ></View>
      ) : (
        <View
          style={{ height: 100, width: 100, backgroundColor: 'red' }}
        ></View>
      )}

      <Text style={styles.text}>Hello Kunal</Text>
      <Text style={{fontSize: 20}}>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    color: Platform.OS=="android" ? "orange" : "blue",
    fontWeight: 'bold',
    fontSize: 40,
  }
})

export default App;
