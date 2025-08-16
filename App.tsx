import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const [visible , setVisible] = useState(true);
  const resetDisplay = ()=>{
    setDisplay(false);
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <View
      style={{
        backgroundColor: '#FFF9D4',
        flex: 1,
        borderWidth: 10,
        borderColor: 'lightpink',
        borderRadius: 35,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          textAlignVertical: 'center',
          textAlign: 'center',
          marginTop: 100,
          backgroundColor: 'lightpink',
          color: 'yellow',
          height: 50,
          borderRadius: 50,
          margin: 70,
          borderWidth: 4,
          borderColor: '#aa6f73',
        }}
      >
        Form in RN
      </Text>
      <TextInput
        style={styles.textBox}
        placeholder={'Enter User Name:'}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.textBox}
        placeholder={'Enter User Email:'}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.textBox}
        placeholder={'Enter User password:'}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={visible}
      />
      <Button color={'#aa6f73'} title="Clear" onPress={()=>resetDisplay()}/>
      <Button color={'#aa6f73'} title="Submit" onPress={()=>setDisplay(true)}/>
        <Button color={'#aa6f73'} title="See password" onPress={()=>setVisible(false)}/>
      <View>
        {
          display ? 
          <View>
            <Text>User Name is: {name}</Text>
            <Text>User Email is: {email}</Text>
            <Text>User Password is: {password}</Text>
          </View> : null
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBox: {
    borderWidth: 2,
    borderColor: '#aa6f73',
    borderRadius: 20,
    margin: 20,
  },
});

export default App;
