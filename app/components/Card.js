import { Image, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import AppText from './AppText';
import colors from '../configs/colors';

const Card = ({ title, subtitle, imageUrl, onPress }) => {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: imageUrl}} />

                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    <AppText style={styles.subTitle} numberOfLines={2}>{subtitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },

    image: {
        width: "100%",
        height: 200,
    },

    detailsContainer: {
        padding: 20,
    },

    title: {
        textTransform: 'capitalize',
        marginBottom: 7,
    },

    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
})

export default Card;