import { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/ui/AppButton';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import Card from '../components/Card';

import colors from '../configs/colors';

import routes from '../navigations/routes';

import useApi from '../hooks/useApi';

import listingsApi from '../apis/listings';

// const listings = [
//     {
//         id: 1,
//         title: 'Red Jacket for sale',
//         price: 100,
//         image: require("../assets/jacket.jpg")
//     },

//     {
//         id: 2,
//         title: 'Couch in great condition',
//         price: 1000, 
//         image: require("../assets/couch.jpg")
//     },

//     {
//         id: 3,
//         title: 'Item3',
//         price: 500,
//         image: require("../assets/couch.jpg")
//     },
// ]

const ListingsScreen = ( { navigation } ) => {

    const getListingsApi = useApi(listingsApi.getListings);

    useEffect(() => {
        getListingsApi.request();
    }, []);


    return (
        <Screen style={styles.screen}>
            {
                getListingsApi.error &&
                <>
                    <AppText>Couldn't get the Listings.</AppText>
                    <AppButton title="Retry" onPress={getListingsApi.request} />
                </>
            }
            <ActivityIndicator visible={getListingsApi.loading} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={getListingsApi.data}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subtitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS_SCREEN, item)}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 20,
        backgroundColor: colors.light,
    },
})

export default ListingsScreen;