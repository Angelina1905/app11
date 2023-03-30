import React, { useState } from 'react'
import { View, Button, Text } from 'react-native'
import { AuthContext } from './AuthContext'

const HomeScreen = ({ navigation, route }) => {
  const [token, setToken] = useState('')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('SignIn')}
      />
      
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Text> {token === '' ? '' : 'Token: ' + token} </Text>
    </View>
  )
}  

export default HomeScreen
