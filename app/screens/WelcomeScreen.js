import React from 'react';
import { ImageBackground, StyleSheet, View, Button, Image } from 'react-native';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.png')}
        >
            <Image
                style={styles.logo} 
                source={require('../assets/logo.png')}
            />
            <View style={styles.masukButton}>
                <Button
                    color="red"
                    title='Masuk Sebagai Tamu'
                    onPress={() => navigation.navigate('HomeScreen')}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        top: 90,
    },
    logo: {
        width: 150,
        height: 150,
        position: "absolute",
        top: -30,
    },
    masukButton: {
        width: "50%",
        height: 40,
        bottom: 140,
    },
});

export default WelcomeScreen;