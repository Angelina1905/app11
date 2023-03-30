import * as React from 'react'
import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { SafeAreaView, Text, View, TextInput, Button, StyleSheet } from 'react-native'
import { apiUrl } from './const'


const SignInScreen = ({ navigation, route }) => {
    const [login, onChangeLogin] = React.useState('user1')
    const [password, onChangePassword] = React.useState('password1')
    const [token, setToken] = React.useState('')
    const [userId, setUserId] = React.useState(0)
    const [userName, setUserName] = React.useState('')


    function saveData() {
        _storeData = async () => {
            try {
                await AsyncStorage.setItem('token', token);
            } catch (error) {
                console.log(error) // Error saving data
            }
        }
    }


    function signIn() { doSignIn() }
    
    function signOut() { 
        setToken('')
        setUserId(0)
        setUserName('')
        saveData()
        alert('You are successfully sign out')
    }
    
    const doSignIn = async() => {
        try {
            const response = await fetch( 'http://localhost:3000/api/v1/userrs')
          
            let json = await response.json() // получаем тело ответа

            if (typeof json['token'] !== 'undefined') {
                setUserId(json.id)
                setUserName(json.login)
                setToken(json.token)
                saveData()
                alert('You are successfully logged in as a user "' +
                      json.login +'"')
            } else if (typeof json['message'] !== 'undefined') {
                navigation.navigate('Main')
            } else console.log(json)
        } catch (error) {
            alert(error)
        } finally {
        }
    }


    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeLogin}
                value={login}
                placeholder="Enter login"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Enter password"
            />
            <Button
                onPress={token === '' ? signIn : signOut }
                title={token === '' ? 'Sign In' : 'Sign out'}
                color="#841584"
                accessibilityLabel="Learn more"
            />
            <View style={styles.text}>
                <Text> {token === '' ? '' : 'Token: ' + token} </Text>
                <Text> {userId === 0 ? '' : 'User id: ' + userId} </Text>
                <Text> {userName === '' ? '' : 'User name: ' + userName} </Text>
            </View>
        </SafeAreaView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    text: {
        margin: 12
    }
})
