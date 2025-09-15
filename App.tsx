import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

  function App(){
    const [data, setData] = useState(undefined);

  async function getAPIData(){
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }

  useEffect(()=>{
    getAPIData();
  },[]);


  return(
    <View style={styles.main}>
      <Text style={styles.text}>Simple API Call</Text>
      {
        data ? <View>
          <Text style={{fontSize: 20}}>{data.userId}</Text>
          <Text style={{fontSize: 20}}>{data.id}</Text>
          <Text style={{fontSize: 20}}>{data.title}</Text>
          <Text style={{fontSize: 20}}>{data.body}</Text>
        </View> : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'peachpuff',
  },
  text:{
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
    color: 'maroon'
  }
})

export default App;