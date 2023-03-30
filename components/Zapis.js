import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  Image,
  item,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import Form from './Form';



export default function Main({ navigation }) {
  const [isChecked, setChecked] = useState(false);
    const LoadScene = () => {
        navigation.navigate('Zapis');
    }
const [rests, setRests] = useState ([
  {time:'', activity: '', details: '', emotions: '', feelings: ''},
  {time:'', activity: '', details: '', emotions: '', feelings: ''},
  {time:'', activity: '', details: '', emotions: '', feelings: ''},
]);
   const addRest = (rest)  => {
    setRests((list) => {
      rest.key = Math.random().toString();
      return [
        rest,
        ...list
      ]
    })
   }

    // const DATA = [
    //   {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'Сон',
    //     image: require('../assets/ASleepIcon.png'),
    //   },
    //   {
    //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    //     title: 'Прогулка',
    //     image: require('../assets/ASleepIcon.png'),
    //   },
    //   {
    //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
    //     title: 'Общение',
    //     image: require('../assets/ASleepIcon.png'),
    //   },
    // ];
    
 
    
   

      return (
    <View > 
       <Form addRest={addRest} />
<Checkbox value={isChecked} onValueChange={setChecked} />
          <Button title={'Продолжить'} onPress={LoadScene} />
    </View>
    
        
      );
      
     
      
    }
     
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      
      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 22,
      },
    });


