import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';

function App() {
  return (
    <WebView
      source={{ uri: 'https://www.linkedin.com/in/kunal-prajapat-487079263/' }}
    />
  );
}

export default App;
