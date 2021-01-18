import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableNativeFeedback, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'

const { height } = Dimensions.get('window');

export default function Register({ navigation }) {

    return (
        <ScrollView style={styles.mainView}>
            <View style={styles.backView}>
                <Icon
                    raised
                    name='arrow-left'
                    type='font-awesome'
                    onPress={navigation.goBack}
                />
            </View>

            <View style={styles.buttonsView}>

                <TextInput
                    placeholder="Email"
                    placeholderTextColor="black"
                    style={styles.textInput}
                />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="black"
                    style={styles.textInput}
                    secureTextEntry={true}
                />

                <TextInput
                    placeholder="Confirm password"
                    placeholderTextColor="black"
                    style={styles.textInput}
                    secureTextEntry={true}
                />


                <TouchableNativeFeedback>
                    <View style={styles.button}>
                        <Text style={{ ...styles.buttonText }}>
                            SIGN UP
                        </Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback >
                    <View style={{ ...styles.button, backgroundColor: '#2E71DC' }}>
                        <Text style={{ ...styles.buttonText, color: 'white' }}>
                            SIGN UP WITH FACEBOOK
                        </Text>
                    </View>
                </TouchableNativeFeedback>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backView: {
        position: 'absolute',
        top: 20,
        left: 12
    },
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    },
    buttonsView: {
        height: height / 1,
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'white',
        height: 60,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        borderColor: `rgba(0,0,0,0.4)`,
        borderWidth: 1,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "black",
        shadowOpacity: 0.5
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000"
    },
    textInput: {
        height: 60,
        borderRadius: 25,
        borderWidth: 1,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        borderColor: `rgba(0,0,0,0.4)`
    }
});
