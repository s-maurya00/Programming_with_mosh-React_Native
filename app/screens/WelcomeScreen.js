import { View, SafeAreaView, Text, StyleSheet, ImageBackground, Image, Platform, StatusBar } from "react-native";

import AppButton from "../components/ui/AppButton";
import routes from "../navigations/routes";

const WelcomeScreen = ( { navigation } ) => {

    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={10} style={styles.background} source={require('../assets/background.jpg')}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                    <Text style={styles.tagLine}>Sell What you don't need</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN_SCREEN)} />

                    <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER_SCREEN)} />
                </View>
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    logoContainer: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        top: 70,
    },

    logo: {
        height: 100,
        width: 100,
    },

    tagLine: {
        fontSize: 20,
        fontWeight: "600",
        paddingVertical: 20,
    },

    buttonContainer: {
        padding: 20,
        width: "100%",
    },
});

export default WelcomeScreen;