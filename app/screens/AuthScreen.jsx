import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableNativeFeedback } from 'react-native';
import BG from '../../assets/bg.jpg'

const { height } = Dimensions.get('window');

export default function Auth({ navigation }) {

    const toLogin = () => navigation.navigate('Login')
    const toRegister = () => navigation.navigate('Register')

    return (
        <View style={styles.mainView}>
            <View style={StyleSheet.absoluteFill}>
                <Image
                    source={BG}
                    style={{ flex: 1, height: null, width: null }}
                />
            </View>
            <View style={styles.buttonsView}>
                <TouchableNativeFeedback onPress={toLogin}>
                    <View style={styles.button}>
                        <Text style={{ ...styles.buttonText }}>
                            SIGN IN
                        </Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={toRegister}>
                    <View style={{ ...styles.button, backgroundColor: '#000' }}>
                        <Text style={{ ...styles.buttonText, color: 'white' }}>
                            SIGN UP
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainView: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end'
    },
    buttonsView: {
        height: height / 3,
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'white',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        borderColor: `#fff`,
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});