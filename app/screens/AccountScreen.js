import { View, FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/lists/ListItemSeparator';

import colors from '../configs/colors';
import routes from '../navigations/routes';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        }
    },

    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: routes.MESSAGES_SCREEN,
    },
];

const AccountScreen = ( { navigation } ) => {

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="My Title"
                    subTitle="my Subtitle"
                    image={require("../assets/mosh.jpg")}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    )}
                />
            </View>

            <ListItem title="Log Out" IconComponent={ <Icon name="logout" backgroundColor='#ffe66d' />} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20,
    }
})

export default AccountScreen;