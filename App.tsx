import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

function App(){
  async function saveAPIData(){
    const data = {
      name: "Tony",
      age: 80,
      email: "tony@singh.com",
    }
    const url = "http://10.147.203.9:3000/users";
    let result = await fetch(url,{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)});
    result = await result.json();
      console.log(result);
  }
  return(
    <View>
      <Text style={styles.text}>Post API Call</Text>
      <Button title="Save Data" onPress={()=>saveAPIData()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  }
})

export default App;
