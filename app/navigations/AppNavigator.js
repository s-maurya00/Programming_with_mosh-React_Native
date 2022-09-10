import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';

import routes from './routes';
import NewListingButton from './NewListingButton';
import AccountNavigator from './AccountNavigator';

import colors from '../configs/colors';

const Tab = createBottomTabNavigator();


const AppNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.primary,
                // tabBarActiveBackgroundColor: colors.light,
                // tabBarInactiveTintColor: colors.medium,
                // tabBarInactiveBackgroundColor: colors.white,
            }}
        >
            <Tab.Screen
                component={FeedNavigator}
                name={routes.FEED}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home-outline' size={size} color={color} />
                }}
            />

            <Tab.Screen
                component={ListingEditScreen}
                name={routes.LISTING_EDIT_SCREEN}
                options={( { navigation } ) => {
                    return ({
                        tabBarButton: () =>  <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT_SCREEN) } />
                    })
                }}
            />

            <Tab.Screen
                component={AccountNavigator}
                name={routes.ACCOUNT_NAVIGATOR}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='account-outline' size={size} color={color} />,
                }}
            />
        </Tab.Navigator>
    )
}

export default AppNavigator;