import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, TextInput } from 'react-native';
import { Formik } from 'formik';


const Form = ({ addRest }) => {


  return (
    <View>
<Formik initialValues={{time:'', activity: '', details: '', emotions: '', feelings: ''}} onSubmit={(values, clean) => {
  addRest(values);
clean.resetForm();
} }>
{(props) => (
    <View>
        <TextInput value={props.values.time} 
            placeholder='Сколько времени вы отдыхали' 
            onChangeText={props.handleChange('time')} />
        <TextInput value={props.values.activity} 
            placeholder='Что вы делали' 
            onChangeText={props.handleChange('activity')} />
         <TextInput value={props.values.details} 
         multiline
        placeholder='Запишите впечатления и детали' 
        onChangeText={props.handleChange('details')} />
        <TextInput value={props.values.emotions} 
        placeholder='Как ваше настроение после отдыха' 
        onChangeText={props.handleChange('emotions')} />
          <TextInput value={props.values.feelings} 
        placeholder='Как вы себя чувствуете после отдыха' 
        onChangeText={props.handleChange('feelings')} />
        <Button title='Готово' onPress={props.handleSubmit}  />
   </View>
)} 
</Formik>
    </View>
  )
}  

export default Form
