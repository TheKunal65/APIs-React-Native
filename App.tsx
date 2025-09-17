import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
function App() {
  const [name, setname] = useState('');
  const [age, setage] = useState(0);
  const [email, setemail] = useState('');
  async function saveAPIData() {
    const data = {
      name: name,
      age: age,
      email: email,
    };

    const url = 'http://10.147.203.9:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    (result = await result.json()), console.log(result);
  }

  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>
        POST API Call by using form
      </Text>

      <View
        style={{
          margin: 20,
          padding: 20,
          borderWidth: 2,
          borderColor: 'maroon',
          backgroundColor: 'lightyellow',
          borderRadius: 30,
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Enter Name:"
          onChangeText={text => setname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Age:"
          onChangeText={text => setage(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Email:"
          onChangeText={text => setemail(text)}
        />
        {/* <Button title="SUBMIT DATA" onPress={() => saveAPIData()}/> */}
        <TouchableOpacity onPress={()=> saveAPIData()}>
          <View style={styles.button}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>SUBMIT DATA</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'peachpuff',
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderColor: 'maroon',
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'maroon',
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  }
});

export default App;
