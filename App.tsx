import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from 'react-native';
import React, { useState, useEffect } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType='fade'>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Kunal Prajapat</Text>
            <Button title="Close Modal" onPress={()=>setShowModal(false)}/>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>Modal in RN (Dialog Box)</Text>
      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={()=>setShowModal(true)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#e6d5b4ff',
    alignItems: 'center',
  },
  text: {
    color: 'maroon',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 50,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'maroon',
    shadowColor: 'black',
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
