import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';

const PickerItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AppText style={styles.text}> {item.label} </AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    text: {
        padding: 15,
    },
})

export default PickerItem;