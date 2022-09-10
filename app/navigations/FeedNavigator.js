import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

import routes from "./routes";

const Stack = createStackNavigator();


const FeedNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName={routes.LISTINGS_SCREEN}
            screenOptions={{ headerShown: false, gestureEnabled: true, presentation: "modal" }}
        >
            <Stack.Screen name={routes.LISTINGS_SCREEN} component={ListingsScreen} />

            <Stack.Screen name={routes.LISTING_DETAILS_SCREEN} component={ListingDetailsScreen} />
        </Stack.Navigator>
    )
}

export default FeedNavigator;