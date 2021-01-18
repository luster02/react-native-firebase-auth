import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { mainStyles } from '../styles/main.styles'

export default function Home() {
    return (
        <View style={styles.center}>
            <Text>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    ...mainStyles
});
