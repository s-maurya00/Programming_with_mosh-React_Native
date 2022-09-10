import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

import routes from "./routes";

const Stack = createStackNavigator();


const AccountNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName={routes.ACCOUNT_SCREEN}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={routes.ACCOUNT_SCREEN} component={AccountScreen} />

            <Stack.Screen name={routes.MESSAGES_SCREEN} component={MessagesScreen} />
        </Stack.Navigator>
    )
}

export default AccountNavigator;