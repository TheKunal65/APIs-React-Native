import { View, Text,StyleSheet, StatusBar, Button } from 'react-native';
import React, { useState, useEffect } from 'react';

function App() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [barSty , setBarSty] = useState("default");
  return (
    <View style={styles.main}>
      <StatusBar barStyle={barSty} hidden={showStatusBar} />
      <Button title='Update StatusBar'onPress={()=>setShowStatusBar(!showStatusBar)}/>
      <Button title='Update Style' onPress={()=>setBarSty("light-content")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App;
