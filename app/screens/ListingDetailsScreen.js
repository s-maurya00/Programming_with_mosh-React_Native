import { Image, StyleSheet, View } from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem';

import colors from '../configs/colors';

const ListingDetailsScreen = ( { route } ) => {

    const item = route.params;

    return (
        <View>
            <Image style={styles.image} source={{ uri: item.images[0].url}} />

            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{item.title}</AppText>
                
                <AppText style={styles.price}>{"$" + item.price}</AppText>

                <View style={styles.userContainer}>
                    <ListItem style={styles.list} image={require("../assets/mosh.jpg")} title="User Name" subTitle="5 Listing" />
                </View>
            </View>
        </View>
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