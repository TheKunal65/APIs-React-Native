import { View, Text, StyleSheet, FlatList } from 'react-native';
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
    <View style={{ backgroundColor: 'peachpuff', flex: 1 }}>
      <Text style={styles.text}>FlatList With API Data</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 10,
                backgroundColor: 'white',
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                margin: 10,
                borderRadius: 25,
                shadowColor: '#000',
                elevation: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  backgroundColor: 'lightyellow',
                  borderBlockColor: 'black',
                  borderWidth: 1,
                  padding: 5,
                  marginBottom: 5,
                  borderRadius: 20,
                }}
              >
                {item.id}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                {item.title}
              </Text>
              <Text style={{ fontSize: 20 }}>{item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default App;
