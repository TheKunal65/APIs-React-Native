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
  const [selectradio , setselectradio] = useState(2);

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>setselectradio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {
              selectradio==1 ? <View style={styles.radioBg}></View> : null
              }
          </View>
          {selectradio==1 ? <Text style={[styles.radioText, styles.radioTextBorder]}>Radio 1</Text> : <Text style={styles.radioText}>Radio 1</Text>}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setselectradio(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {
              selectradio==2 ? <View style={styles.radioBg}></View> : null
              }
          </View>
          {selectradio==2 ? <Text style={[styles.radioText, styles.radioTextBorder]}>Radio 2</Text> : <Text style={styles.radioText}>Radio 2</Text>}
        </View>
      </TouchableOpacity>
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
  radioBg:{
    backgroundColor:'skyblue',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4
  },
  radioTextBorder:{
    borderWidth: 2,
    borderColor: 'skyblue',
    padding: 10,
    backgroundColor: 'yellow',
    borderRadius: 25,
  }
});
export default App;
