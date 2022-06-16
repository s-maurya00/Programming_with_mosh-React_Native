import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';
import Icon from './Icon';

const CategoryPickerItem = ( { item, onPress } ) => {
    return (

        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80} />

            <AppText style={styles.text}> {item.label} </AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: 15,
        width: "33.33%",
    },

    text: {
        marginTop: 5,
        textAlign: "center",
    },
});

export default CategoryPickerItem;
