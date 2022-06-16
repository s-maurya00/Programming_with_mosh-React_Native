import { Image, StyleSheet, View } from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';

import colors from '../configs/colors';

const ListingDetailsScreen = ({title, price, image}) => {
    return (
        <Screen>
            <Image style={styles.image} source={require("../assets/jacket.jpg")} />

            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                
                <AppText style={styles.price}>{price}</AppText>

                <View style={styles.userContainer}>
                    <ListItem style={styles.list} image={require("../assets/mosh.jpg")} title="User Name" subTitle="5 Listing" />
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },

    detailsContainer: {
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: "500",
    },

    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
    },

    userContainer: {
        marginVertical: 40,
    },

    list: {
        padding: 0,
        paddingBottom: 15,
    },
})

export default ListingDetailsScreen;