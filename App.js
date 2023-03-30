import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TextInput, View, } from 'react-native';
import ReactDOM from 'react-dom';
import { gStyle } from './styles/style';
import * as Font from 'expo-font';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
// import { useFonts } from 'expo-font';
import MainStack from './navigate';



export default function App() {

  // const [fontsLoaded] = useFonts({
  //   'pn-reg': require('./assets/fonts/proximanova_regular.ttf'),
  //   'pn-sembold' : require('./assets/fonts/ProximaSemi.ttf'),
  //   'pn-bold':require('./assets/fonts/proximanova_bold.ttf'),
  //   'golos-bold': require('./assets/fonts/Golos-Text_Bold.ttf')
  // })

// const [font, setFont] = useState(false);

// if(font) {
  return (
      <MainStack />
  );
// } else {
//    return (
//     <AppLoading  startAsync={useFonts} onFinish={() => setFont(true)}   />
//    );
// }
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    fontFamily: 'pn-bold'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: '#37393A',
    top: -210,
    left: 140,
    fontSize: 120,
    // fontFamily: 'golos-bold',
  },
  butFirst: {
    padding: 20,
      //  backgroundColor: '#3498db',
      borderRadius: 10,
      // fontFamily: 'pn-bold',
      paddingBottom:30,
  },
  mainPic: {
    top: -59,
    padding: 0,
    margin: 0,
    zIndex: 0,
    width: 430,
  }
});
