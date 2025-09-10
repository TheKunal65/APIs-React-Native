import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';

function App() {
  const [selectradio, setselectradio] = useState(2);
  const skills = [
    {
      id: 1,
      name: 'C++',
    },
    {
      id: 2,
      name: 'JAVA',
    },
    {
      id: 3,
      name: 'DART',
    },
    {
      id: 4,
      name: 'Flutter',
    },
    {
      id: 5,
      name: 'React Native',
    },
  ];

  return (
    <View style={styles.main}>
      {skills.map((item, index) => (
        <TouchableOpacity onPress={() => setselectradio(item.id)}>
          {' '}
          key={index}
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectradio == item.id ? <View style={styles.radioBg}></View> : null}
            </View>
            {selectradio == item.id ? (
              <Text style={[styles.radioText, styles.radioTextBorder]}>
                {item.name}
              </Text>
            ) : (
              <Text style={styles.radioText}>{item.name}</Text>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
    color: 'skyblue',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioBg: {
    backgroundColor: 'skyblue',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
  radioTextBorder: {
    borderWidth: 2,
    borderColor: 'skyblue',
    padding: 10,
    backgroundColor: 'yellow',
    borderRadius: 25,
  },
});
export default App;
