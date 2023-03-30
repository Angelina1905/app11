import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TextInput, View, } from 'react-native';
import ReactDOM from 'react-dom';
// import { gStyle } from '../../styles/style';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';





export default function Main({ navigation }) {
const LoadScene = () => {
    getUserrs()
    navigation.navigate('Zapis');
}
const LoaScene = () => {
  navigation.navigate('Profile');
}

const [date, setDate] = useState(null);

useEffect(() => {
  let today = new Date();
  let date = today.getMonth()+1+'-'+today.getDate();
  setDate(date);
}, []);

const getUserrs = async() => {
    try {
        const response = await fetch( 'http://localhost:3000/api/v1/userrs' )
        let json = await response.json() // получаем тело ответа
        console.log(json)
        if (typeof json['status'] !== 'undefined') {
        //     setUserId(json.status)
        //    setUserName(json.login)
        //     setToken(json.token)
        //    saveData()
            alert(json.status)
        } else console.log(json)
    } catch (error) {
        console.log(error)
       alert(error)
    } finally {}
}

// {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
// }
  return (

    <SafeAreaView style={styles.container}>
      <Image style={styles.mainPic}
        source={require('../assets/1232.png')}
      />
         <Image style={styles.iconpress}
        source={require('../assets/iconpress.png')}
      />
      {/* <Text style={styles.text}>20</Text> */}
      <TouchableOpacity  onPress={LoadScene}  style={styles.butFirst}>
  <Text style={styles.buttonText}>Добавить запись</Text>
</TouchableOpacity>
<TouchableOpacity  onPress={LoaScene}  style={styles.butFirst}>
  <Text style={styles.buttonText}> запись</Text>
</TouchableOpacity>
<TouchableOpacity  style={styles.buеtFirst}>
  <Text style={styles.buttonTextе}>Пока без отдыха</Text>
</TouchableOpacity>
<Text style={styles.paragraph}>{date}</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
    
  );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // fontFamily: 'pn-bold'
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
    backgroundColor: "#E07513",
    padding: 16,
    borderRadius: 22,
    width: 290,
    left: 75,
  },
  buttonText: {
    textAlign: 'center',
    color: "white",
    fontSize: 22,
  },
  buеtFirst: {
    border: 20,
    borderColor: "#E07513",
    padding: 20,
    borderRadius: 22,
    width: 290,
    left: 75,
  },
  buttonTextе: {
    textAlign: 'center',
    color: "#E07513",
    fontSize: 22,
  },
  mainPic: {
    top: -59,
    padding: 0,
    margin: 0,
    zIndex: 0,
    width: 430,
  },
  iconpress: {
    top: -610,
    padding: 0,
    left:370,
    margin: 0,
    zIndex: 0,
  },
  paragraph: {
    margin: 24,
    top: -350,
    fontSize: 88,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
