import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableNativeFeedback,
    ScrollView,
    ActivityIndicator,
    Alert,
    SafeAreaView
} from 'react-native';
import { Icon } from 'react-native-elements'
import { useResetPassword } from '../hooks/useFirebase'

const { height } = Dimensions.get('window');

export default function Forgot({ navigation }) {
    const [Email, setEmail] = useState('')
    const [exec, { loading, error }] = useResetPassword()

    function send() {
        if (!Email) {
            Alert.alert(
                'Error',
                'Email is required',
                [
                    { text: "OK", onPress: () => null }
                ]
            )
        } else {
            exec(Email)
                .then(() => {
                    Alert.alert(
                        'Sent',
                        'Email was sent successfully',
                        [
                            { text: "OK", onPress: () => navigation.goBack() }
                        ]
                    )
                })
        }
    }

    return (
        <SafeAreaView style={styles.droidSafeArea}>
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
                        onChangeText={text => setEmail(text)}
                        value={Email || ''}
                    />


                    <TouchableNativeFeedback disabled={loading} onPress={send}>
                        <View style={loading ? styles.disabledBtn : styles.button}>
                            <Text style={loading ? styles.disabledBtnText : { ...styles.buttonText }}>
                                Send email
                        </Text>
                        </View>
                    </TouchableNativeFeedback>

                    {loading && <ActivityIndicator size="large" color="#000" />}


                    {error && <Text style={styles.errorText}>{error.message}</Text>}

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
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
    },
    disabledBtn: {
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
        shadowOpacity: 0.5,
        backgroundColor: "#A9A9A9",
    },
    disabledBtnText: {
        fontSize: 20,
        fontWeight: '900',
        color: "#fff"
    },
    errorText: {
        textAlign: 'center',
        color: 'red',
        fontWeight: '300'
    },
    forgotViewStyle: {
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 50
    }
});
