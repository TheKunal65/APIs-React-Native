import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  async function getAPIData() {
    const url = 'http://10.147.203.9:3000/users';
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  }

  async function deleteUser(id){
    const url = 'http://10.147.203.9:3000/users';
    console.warn(`${url}/${id}`)
    let result = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    if(result){
      console.warn("USER DELETED");
      getAPIData();
    }
  }

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.main}>
        <Text style={styles.topic}>List with API Data</Text>
        <View style={styles.dataWrapper}>
        <View style={{ flex: 1.7}}>
          <Text style={{fontWeight: 'bold' }}>Name</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{fontWeight: 'bold' }}>Age</Text>
        </View >
        {/* <View style={{flex: 1}}><Text>{item.email}</Text></View> */}
        <View style={{flex: 1}}><Text style={{fontWeight: 'bold' }}>Operations</Text></View>
        </View>
        {data.length
          ? data.map(item => (
              <View style={styles.dataWrapper}>
                <View style={{ flex: 1.7 }}>
                  <Text>{item.name}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text>{item.age}</Text>
                </View>
                {/* <View style={{flex: 1}}><Text>{item.email}</Text></View> */}
                <View style={{ flex: 1 }}>
                  <Button title="Update" />
                </View>
                <View style={{ flex: 1 }}>
                  <Button title="Delete" onPress={()=>deleteUser(item.id)}/>
                </View>
              </View>
            ))
          : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'peachpuff',
    flex: 1,
  },
  topic: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    backgroundColor: 'lightyellow',
    padding: 10,
    margin: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'maroon',
    borderStyle: 'solid',
  },
  dataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    margin: 5,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'brown',
    borderStyle: 'dashed',
  },
});

export default App;
