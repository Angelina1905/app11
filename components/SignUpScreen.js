import * as React from 'react'
import { useState } from 'react'
import { SafeAreaView, TextInput, Button, View, Text, StyleSheet } from 'react-native'
import { apiUrl } from './const'

const SignUpScreen = ({ navigation, route }) => {
    const [login, onChangeLogin] = React.useState('user2')
    const [password1, onChangePassword1] = React.useState('password2')
    const [password2, onChangePassword2] = React.useState('password2')
    const [email, onChangeEmail] = React.useState('advev@mail.ru')

    const emptyUser = {
        id: 0,
        login: '',
        password: '',
        email: '',
        token: ''
    }
    const [user, setUser] = useState(emptyUser)


    function signUp() {
        signOut()
        doSignUp()
    }
    
    function signOut() {
        setUser(emptyUser)
    }

    const doSignUp = async () => {
        try {
            const response = await fetch( 'http://localhost:3000/api/v1/userrs')
            //     apiUrl + "/auth/signup",
            //     {
            //         method:'POST',
            //         headers:{
            //             'Accept': 'application/json',
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({'login': login, 'password': password1, 'email': email})
            //     }
            // )
            const json = await response.json()

            if (typeof json['token'] !== 'undefined') {
                setUser(json)

                alert('You are successfully signed up as a user "' +
                      json.login +'"')
            } else if (typeof json['message'] !== 'undefined') {
                alert(json.message)
            } else console.log(json)
        } catch (error) {
            console.error(error)
        } finally {}
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
                onChangeText={onChangePassword1}
                value={password1}
                placeholder="Enter password"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword2}
                value={password2}
                placeholder="Enter password again"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Enter email"
            />
            <Button
                onPress={signUp}
                title="Sign up"
                color="#841584"
                accessibilityLabel="Learn more"
            />
            <View style={styles.text}>
                <Text> {user.token === '' ? '' : 'Token: ' + user.token} </Text>
                <Text> {user.id === 0 ? '' : 'User id: ' + user.id} </Text>
                <Text> {user.login === '' ? '' : 'User name: ' + user.login} </Text>
                <Text> {user.password === '' ? '' : 'User password: ' + user.password} </Text>
                <Text> {user.email === '' ? '' : 'User email: ' + user.email} </Text>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen

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
