import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import AuthScreen from '../screens/AuthScreen'
const Stack = createStackNavigator()

export function AuthNavigation() {
    return (
        <Stack.Navigator initialRouteName="Auth"> 
            <Stack.Screen
                name="Auth"
                component={AuthScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}