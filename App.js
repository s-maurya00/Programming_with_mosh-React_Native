import { StyleSheet, Text, TextInput } from "react-native";

import AppButton from "./app/components/AppButton";
import Screen from "./app/components/Screen";
import colors from "./app/configs/colors";

import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {

    return (
        // <AccountScreen />
        // <ListingDetailsScreen title="My Title" price="$100" />
        // <ListingEditScreen />
        // <ListingsScreen />
        // <LoginScreen />
        // <MessagesScreen />
        <RegisterScreen />
        // <ViewImageScreen />
        // <WelcomeScreen />
        // <Screen>
        //     <AppButton color="secondary" title="Test" style={styles.button} />
        // </Screen>
    );
}

const styles = StyleSheet.create({
    // button: {
    //     backgroundColor: colors.primary,
    // }
});