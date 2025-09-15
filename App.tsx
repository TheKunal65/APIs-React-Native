import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setdata] = useState([]);
  async function getAPIData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setdata(result);
  }
  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.main}>
        <Text style={styles.text}>Simple API Call</Text>
        {data.length
          ? data.map(item => (
              <View
                style={{
                  padding: 20,
                  borderBottomColor: 'grey',
                  borderBottomWidth: 3,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    backgroundColor: 'lightyellow',
                    borderRadius: 15,
                  }}
                >
                  Id: {item.id}
                </Text>
                <Text style={{ fontSize: 20 }}>Title: {item.title}</Text>
                <Text style={{ fontSize: 20 }}>Body: {item.body}</Text>
              </View>
            ))
          : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'peachpuff',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
    color: 'maroon',
  },
});

export default App;
