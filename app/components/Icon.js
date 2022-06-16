import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ name, size = 40, backgroundColor = "#000", iconColor = "#fff" }) => {
    return (
        <View style={ [styles.iconContainer, {height: size, width: size, borderRadius: size * 0.5, backgroundColor}] }>
            <MaterialCommunityIcons name={name} color={iconColor} size={ size * 0.5 } />
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Icon;