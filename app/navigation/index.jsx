import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as firebase from 'firebase'

//stacks
import { HomeNavigation } from './HomeStack'
import { AuthNavigation } from './AuthStack'


const Drawer = createDrawerNavigator();

export default function Navigation() {
    const [isAuth, setIsAuth] = useState(false)
    const [Loading, setLoading] = useState(false)

    useEffect(() => {
        (() => {
            setLoading(true)
            firebase.auth().onAuthStateChanged((user) => {
                user ? setIsAuth(true) : setIsAuth(false)
                setLoading(false)
            })
        })()
    }, [])

    return (
        Loading
            ? <ActivityIndicator size="large" color="#000" />
            : <NavigationContainer>
                {isAuth
                    ? <Drawer.Navigator initialRouteName="Home">
                        <Drawer.Screen
                            name="Home"
                            component={HomeNavigation}
                        />
                    </Drawer.Navigator>
                    : <AuthNavigation />
                }
            </NavigationContainer>
    )
}