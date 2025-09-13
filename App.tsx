import { View, Text,StyleSheet, Button} from 'react-native';
import React, { useState, useEffect } from 'react';

function App() {
  const [modalVisible , setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      {
        modalVisible ? <View style={styles.modal}>
        <View style={styles.body}>
          <Text>Some Text</Text>
          <Button title="Close" onPress={()=>setShowModal(false)}/>
        </View>
      </View> : null
      }
      <Button title="Open Dialog" onPress={()=>setShowModal(true)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-end',
    marginBottom: 50,
  },
  modal:{
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
    backgroundColor: 'rgba(50,50,50,0.5)'
  },
  body:{
    alignItems:'center',
    justifyContent:'center',
    height: 300,
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 30,
    borderWidth: 2,
  }
})

export default App;
