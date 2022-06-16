import { View, Image, StyleSheet, Platform, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../configs/colors";

const ViewImageScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={35} color="#fff" />
            </View>
            
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" size={35} color="#fff" />
            </View>

            <Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    closeIcon: {
        position: 'absolute',
        top: 14,
        left: 20,
    },

    deleteIcon: {
        position: 'absolute',
        top: 14,
        right: 20,
    },
    
    image: {
        width: '100%', 
        height: '100%',
    },
})

export default ViewImageScreen;